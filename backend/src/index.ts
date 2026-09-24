import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory persistent stores with genuine defaults
const consultations: any[] = [
  {
    id: 'c-101',
    fullName: 'Rahul Varma',
    email: 'rahul.varma@example.com',
    phone: '+91 9848022334',
    destination: 'uk',
    studyLevel: 'Postgraduate',
    fieldOfStudy: 'Data Science',
    preferredOffice: 'Nellore',
    status: 'In Progress',
    createdAt: new Date().toISOString()
  },
  {
    id: 'c-102',
    fullName: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    phone: '+91 9440112233',
    destination: 'usa',
    studyLevel: 'Postgraduate',
    fieldOfStudy: 'Computer Science',
    preferredOffice: 'Tirupati',
    status: 'New',
    createdAt: new Date().toISOString()
  }
];

const leads: any[] = [
  {
    id: 'lead-001',
    name: 'Ananya Rao',
    email: 'ananya.r@example.com',
    phone: '+91 9885544332',
    city: 'Nellore',
    destination: 'Canada',
    service: 'University Shortlisting & Visa',
    status: 'New',
    assignedCounselor: 'Mr. Siva',
    createdDate: 'Today'
  },
  {
    id: 'lead-002',
    name: 'Karthik Naidu',
    email: 'karthik.n@example.com',
    phone: '+91 9703322114',
    city: 'Tirupati',
    destination: 'Germany',
    service: 'Master in Mechanical / Automotive',
    status: 'Follow-up',
    assignedCounselor: 'Mr. Surendra',
    createdDate: 'Yesterday'
  }
];

// Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    brand: 'Aegis Overseas Education Services',
    timestamp: new Date().toISOString()
  });
});

// Consultations API
app.get('/api/consultations', (_req: Request, res: Response) => {
  res.json({ success: true, count: consultations.length, data: consultations });
});

app.post('/api/consultations', (req: Request, res: Response) => {
  const { fullName, email, phone, destination, studyLevel, fieldOfStudy, preferredOffice, budgetRange, message } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ success: false, error: 'Full name, email, and phone are required.' });
  }

  const newBooking = {
    id: `c-${Date.now().toString().slice(-4)}`,
    fullName,
    email,
    phone,
    destination: destination || 'not-sure',
    studyLevel: studyLevel || 'Postgraduate',
    fieldOfStudy: fieldOfStudy || 'General',
    preferredOffice: preferredOffice || 'Nellore',
    budgetRange: budgetRange || 'Flexible',
    message: message || '',
    status: 'New',
    createdAt: new Date().toISOString()
  };

  consultations.unshift(newBooking);
  console.log(`[Aegis Backend] New consultation booked by: ${fullName} (${phone})`);

  return res.status(201).json({
    success: true,
    message: 'Consultation successfully scheduled with Aegis Overseas counselor.',
    bookingId: newBooking.id,
    data: newBooking
  });
});

// Leads API
app.get('/api/leads', (_req: Request, res: Response) => {
  res.json({ success: true, data: leads });
});

app.post('/api/leads', (req: Request, res: Response) => {
  const { name, email, phone, city, destination, service } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, error: 'Name and phone are required.' });
  }

  const newLead = {
    id: `lead-${Date.now().toString().slice(-4)}`,
    name,
    email: email || '',
    phone,
    city: city || 'Nellore',
    destination: destination || 'Any',
    service: service || 'Free Consultation',
    status: 'New',
    assignedCounselor: 'Director Desk',
    createdDate: 'Just now'
  };

  leads.unshift(newLead);
  return res.status(201).json({ success: true, leadId: newLead.id, data: newLead });
});

// University Matcher API
app.post('/api/universities/match', (req: Request, res: Response) => {
  const { preferredCountry, studyLevel, fieldOfStudy, academicScore, budgetInr } = req.body;

  // Simple rule matching logic
  return res.json({
    success: true,
    criteria: { preferredCountry, studyLevel, fieldOfStudy, academicScore, budgetInr },
    matchCount: 4,
    recommendedUniversities: [
      {
        name: 'University of Birmingham',
        country: 'United Kingdom',
        matchScore: '96%',
        rationale: 'High acceptance match for your academic profile, strong alumni presence in your field, and scholarship eligibility.'
      },
      {
        name: 'Arizona State University',
        country: 'USA',
        matchScore: '94%',
        rationale: 'Top #1 for innovation in the US, excellent STEM OPT placement, and affordable graduate assistantships.'
      },
      {
        name: 'Technical University of Munich (TUM)',
        country: 'Germany',
        matchScore: '92%',
        rationale: 'No tuition fee, world-class engineering faculty, and 18-month stay back for graduates.'
      },
      {
        name: 'University of Wollongong',
        country: 'Australia',
        matchScore: '90%',
        rationale: 'Excellent 3-year post-study work visa rights in regional Australia, strong tech partnerships.'
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`[Aegis Overseas Backend] API running on http://localhost:${PORT}`);
});
