# Aegis Overseas University Directory — AI Agent Implementation

Use the attached generated `*_universities.json` files and `logos/` directory as the SOURCE DATA for the university directory UI.

## Source scope
The source PDFs are dated 6 October 2026. Preserve institution names, locations, website domains, section/category labels, numbering, and available logo assets exactly as provided. Do not silently replace or invent missing data.

Current source coverage:
- UK: 159 directory entries (149 Universities + 10 Additional specialist institutions)
- USA: 2,825 institution listings
- Canada: 151 entries across international providers with Canadian authorisation, universities, and affiliated colleges/other university-level institutions
- Germany: 390 universities/higher education institutions
- Ireland: 23 entries (15 Universities + 8 Additional specialist institutions)
- New Zealand: 8 universities

## UI requirements

Replace the current university directory card design with a clean premium directory layout.

### Header
Title:
`{country} University Directory`

Subtitle:
`Explore accredited universities and institutions across {country}`

Keep a close button if the directory opens as a modal.

### Controls
Keep ONLY:
1. Search input — `Search by university name...`
2. All Cities dropdown
3. A–Z sorting

DO NOT add an `All Subjects` field.

Search should match institution name and website domain.

All Cities should be generated from the actual location values in the dataset. Do not invent cities.

A–Z should sort by institution name.

### Results count
Show:
`Showing 1–8 of {total} institutions in {country}`

Use the actual total from the loaded dataset.

### Card structure

Each card should contain:

[EXISTING SOURCE LOGO]

Institution Name
Location

--------------------------------

🌐 official-domain.com ↗

                         →

The logo MUST come from the extracted `logos/` asset corresponding to that entry whenever `logo_available=true`.

Do not replace the supplied source logo with a generic icon or newly generated logo.

If `logo_available=false`, show a clean neutral logo placeholder with the institution initials. Do not invent a logo.

### Card behavior
- Website/domain click opens the supplied `website_url` in a new tab.
- The arrow button performs the same website action unless existing functionality requires a different action.
- Do not invent `Apply`, `Shortlist`, rankings, tuition fees, programs, or other fields that are not in the directory source data.
- Preserve exact institution names and source locations.

### Important category handling
The source PDFs contain different categories. Preserve the `section` field.

Examples:
- UK has Universities and Additional specialist institutions.
- Ireland has Universities and Additional specialist institutions.
- Canada has International providers with Canadian authorisation, Universities, and Affiliated colleges & other university-level institutions.
- USA is an institution directory, not a claim that every listing is a university.

Do not relabel every source entry as a university if its source section says otherwise.

### Pagination
Keep pagination.

Default:
8 cards per page.

Show:
Previous
Page numbers
Next
Go to page

Do not load all cards into the DOM if unnecessary; paginate the displayed records.

### Grid
Desktop:
4 cards per row.

Tablet:
2 cards per row.

Mobile:
1 card per row.

### Card visual style
Light theme.
White cards.
Very subtle border.
Soft shadow.
Rounded corners.
Navy headings.
Muted gray location text.
Blue website links.
Small gold accent.
Clean spacing.
No excessive gradients.
No heavy glassmorphism.

### Data architecture
Create one reusable component:

`UniversityDirectory`

and one reusable card:

`UniversityDirectoryCard`

Country data should be loaded from the corresponding JSON file.

Suggested structure:

`src/data/universities/uk_universities.json`
`src/data/universities/usa_universities.json`
`src/data/universities/canada_universities.json`
`src/data/universities/germany_universities.json`
`src/data/universities/ireland_universities.json`
`src/data/universities/new_zealand_universities.json`

Logos:

`src/assets/university-logos/...`

Adapt paths to the existing project architecture rather than restructuring the whole application.

### Critical rules
- Frontend only.
- No backend.
- No database.
- No API.
- No CMS.
- Do not change existing routing unless required for the existing directory.
- Do not change the destination structure.
- Do not remove the existing WhatsApp functionality.
- Reuse existing components where practical.
- Preserve the current `View All UK Universities` / equivalent destination button behavior.
- The primary navbar should continue to use Destinations rather than creating a new top-level Universities navigation item if that is already the current project decision.

## Data integrity
The JSON data is extracted from the supplied PDFs. Treat it as source-of-truth for this directory implementation.

Do NOT:
- change spelling,
- change locations,
- replace website domains,
- invent missing logos,
- add rankings,
- add courses,
- add fees,
- add admissions information,
- add university descriptions,
unless those fields already exist elsewhere in the current application and are intentionally retained separately.

The goal is to redesign the directory cards and organize the supplied university data without changing the existing business functionality.
