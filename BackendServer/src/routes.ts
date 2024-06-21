import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const dbPath = path.resolve(__dirname, 'db.json');

// Ensure db.json exists
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]));
}

router.get('/ping', (req: Request, res: Response) => {
    res.send(true);
});

router.post('/submit', (req: Request, res: Response) => {
    console.log('Received submission:', req.body);

    const { Name, Email, PhoneNumber, GitHubLink, StopwatchTime } = req.body;
    const newSubmission = { Name, Email, PhoneNumber, GitHubLink, StopwatchTime };

    try {
        const data = fs.readFileSync(dbPath, 'utf-8');
        const submissions = JSON.parse(data);

        console.log('Current submissions:', submissions);

        if (!Array.isArray(submissions)) {
            throw new Error('Database file is corrupted');
        }

        submissions.push(newSubmission);
        console.log('New submissions array:', submissions);

        fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));
        console.log('Successfully wrote to db.json');

        res.status(200).send({ success: true });
    } catch (error) {
        console.error('Error writing to db.json:', error);
        res.status(500).send({ error: 'Failed to save submission' });
    }
});


router.get('/read', (req: Request, res: Response) => {
    try {
        const index = parseInt(req.query.index as string, 10);

        if (isNaN(index) || index < 0) {
            throw new Error('Invalid index');
        }

        const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

        if (index >= submissions.length) {
            throw new Error('Submission not found');
        }

        res.status(200).json(submissions[index]);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

router.delete('/delete/:index', (req: Request, res: Response) => {
    try {
        const index = parseInt(req.params.index, 10);

        if (isNaN(index) || index < 0) {
            throw new Error('Invalid index');
        }

        const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

        if (index >= submissions.length) {
            throw new Error('Submission not found');
        }

        submissions.splice(index, 1);
        fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));

        res.status(200).send({ success: true });
    } catch (error) {
        res.status(400).send({ error: 'Unable to delete' });
    }
});

router.put('/edit/:index', (req: Request, res: Response) => {
    try {
        const index = parseInt(req.params.index, 10);
        const { Name, Email, PhoneNumber, GitHubLink, StopwatchTime } = req.body;

        console.log('Received edited body:', req.body);

        if (isNaN(index) || index < 0) {
            throw new Error('Invalid index');
        }

        const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

        if (index >= submissions.length) {
            throw new Error('Submission not found');
        }

        submissions[index] = { Name, Email, PhoneNumber, GitHubLink, StopwatchTime };
        fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));

        res.status(200).send({ success: true });
    } catch (error) {
        res.status(400).send({ error: 'Unable to Edit' });
    }
});


export default router;
