import { jsPDF } from 'jspdf';
import { DestinationData } from '../data/destinations';

export const generateCountryGuidePdf = (dest: DestinationData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper: check page break
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 20) {
      addFooter();
      doc.addPage();
      y = margin + 10;
      addHeader();
    }
  };

  // Helper: Header
  const addHeader = () => {
    doc.setFillColor(7, 18, 40); // Aegis Navy
    doc.rect(margin, 10, contentWidth, 0.8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(197, 160, 89); // Gold
    doc.text('AEGIS OVERSEAS EDUCATION SERVICES', margin, 9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.text(`Official Study Abroad Guide — ${dest.country}`, pageWidth - margin, 9, { align: 'right' });
  };

  // Helper: Footer
  const addFooter = () => {
    const pageNum = doc.getNumberOfPages();
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.4);
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120, 120, 120);
    doc.text('Aegis Overseas Education Services | Phone: +91 85007 22284 | info@aegisoverseas.com', margin, pageHeight - 7);
    doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 7, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: COVER & OVERVIEW
  // ==========================================
  
  // Cover Header Box
  doc.setFillColor(7, 18, 40); // Navy
  doc.roundedRect(margin, y, contentWidth, 42, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(230, 198, 135); // Light Gold
  doc.text(`STUDY ABROAD DESTINATION GUIDE • ${dest.flag}`, margin + 8, y + 11);

  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text(dest.country.toUpperCase(), margin + 8, y + 23);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(200, 215, 235);
  doc.text(`"${dest.headline} — ${dest.phrase}"`, margin + 8, y + 33);

  y += 48;

  // Overview paragraph
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(7, 18, 40);
  doc.text('1. Country Overview & Academic Excellence', margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 50);
  const overviewLines = doc.splitTextToSize(dest.overview, contentWidth);
  doc.text(overviewLines, margin, y);
  y += overviewLines.length * 5 + 6;

  // Key Facts Table Box
  doc.setFillColor(253, 251, 247); // Cream
  doc.setDrawColor(230, 215, 180);
  doc.roundedRect(margin, y, contentWidth, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(197, 160, 89);
  doc.text('KEY STUDY ABROAD FACTS', margin + 6, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(7, 18, 40);

  const colW = contentWidth / 2;
  let factY = y + 14;
  dest.keyFacts.slice(0, 4).forEach((fact, idx) => {
    const colX = margin + 6 + (idx % 2) * colW;
    const currentY = factY + Math.floor(idx / 2) * 11;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(120, 120, 120);
    doc.text(`${fact.label.toUpperCase()}:`, colX, currentY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(7, 18, 40);
    const splitVal = doc.splitTextToSize(fact.value, colW - 12);
    doc.text(splitVal, colX, currentY + 4);
  });

  y += 44;

  // Admission & Eligibility
  checkPageBreak(40);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(7, 18, 40);
  doc.text('2. Admission & Eligibility Benchmarks', margin, y);
  y += 6;

  const reqs = [
    { label: "Undergraduate Admissions (Bachelor's):", text: dest.admissionRequirements.ug },
    { label: "Postgraduate Admissions (Master's / MBA):", text: dest.admissionRequirements.pg },
    { label: "English Language Proficiency:", text: dest.admissionRequirements.english },
    { label: "Main Intakes:", text: dest.admissionRequirements.intakes }
  ];

  reqs.forEach((r) => {
    checkPageBreak(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(197, 160, 89);
    doc.text(`• ${r.label}`, margin + 2, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(60, 60, 60);
    const splitT = doc.splitTextToSize(r.text, contentWidth - 6);
    doc.text(splitT, margin + 6, y + 4.5);
    y += splitT.length * 4.5 + 4;
  });

  if (dest.admissionRequirements.disclaimer) {
    checkPageBreak(16);
    doc.setFillColor(250, 247, 240);
    doc.setDrawColor(220, 200, 150);
    doc.roundedRect(margin, y, contentWidth, 12, 1, 1, 'FD');
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 80, 40);
    const disc = doc.splitTextToSize(`Note: ${dest.admissionRequirements.disclaimer}`, contentWidth - 8);
    doc.text(disc, margin + 4, y + 4.5);
    y += 16;
  }

  // ==========================================
  // PAGE 2: UNIVERSITIES & JOURNEY ROUTE MAP
  // ==========================================
  checkPageBreak(60);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(7, 18, 40);
  doc.text(`3. Top Ranked Universities in ${dest.country}`, margin, y);
  y += 6;

  // University Table Header
  doc.setFillColor(7, 18, 40);
  doc.rect(margin, y, contentWidth, 7, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.text('UNIVERSITY NAME', margin + 4, y + 5);
  doc.text('LOCATION', margin + 90, y + 5);
  doc.text('GLOBAL RANKING', margin + 138, y + 5);
  y += 7;

  // University Rows
  dest.topUniversities.slice(0, 6).forEach((uni, idx) => {
    checkPageBreak(8);
    doc.setFillColor(idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 248);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(7, 18, 40);
    doc.text(uni.name.length > 44 ? uni.name.substring(0, 42) + '...' : uni.name, margin + 4, y + 4.8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text(uni.location.substring(0, 26), margin + 90, y + 4.8);
    doc.setTextColor(197, 160, 89);
    doc.setFont('helvetica', 'bold');
    doc.text(uni.ranking, margin + 138, y + 4.8);
    y += 7;
  });

  y += 6;

  // ==========================================
  // ROUTE MAP SECTION
  // ==========================================
  checkPageBreak(50);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(7, 18, 40);
  doc.text(`4. ${dest.journeyMap.title} (${dest.journeyMap.totalSteps} Steps)`, margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(90, 90, 90);
  doc.text(dest.journeyMap.subtitle, margin, y);
  y += 5;

  dest.journeyMap.phases.forEach((phase) => {
    checkPageBreak(18 + phase.steps.length * 8);

    doc.setFillColor(245, 247, 250);
    doc.roundedRect(margin, y, contentWidth, 6.5, 1, 1, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(7, 18, 40);
    doc.text(`PHASE ${phase.phaseNumber}: ${phase.name.toUpperCase()} (${phase.subtitle})`, margin + 4, y + 4.5);
    y += 8.5;

    phase.steps.forEach((st) => {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(30, 64, 175);
      doc.text(`Step ${st.stepNumber}:`, margin + 6, y);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(7, 18, 40);
      doc.text(st.title, margin + 22, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(80, 80, 80);
      const descLines = doc.splitTextToSize(st.shortDesc, contentWidth - 26);
      doc.text(descLines, margin + 22, y + 3.8);
      y += descLines.length * 3.5 + 4;
    });

    y += 2;
  });

  // ==========================================
  // VISA CHECKLIST & SETTLEMENT
  // ==========================================
  checkPageBreak(45);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(7, 18, 40);
  doc.text('5. Student Visa Checklist & Official Documents', margin, y);
  y += 6;

  dest.visaChecklist.forEach((item) => {
    checkPageBreak(7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(16, 185, 129); // Emerald
    doc.text('[✓]', margin + 2, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const itemLines = doc.splitTextToSize(item, contentWidth - 12);
    doc.text(itemLines, margin + 10, y);
    y += itemLines.length * 4 + 2;
  });

  y += 4;

  // Aegis Settlement & Relocation Box
  checkPageBreak(32);
  doc.setFillColor(7, 18, 40);
  doc.roundedRect(margin, y, contentWidth, 26, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(230, 198, 135);
  doc.text('POST-VISA & SETTLEMENT CONTINUITY (AEGIS OVERSEAS)', margin + 6, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(220, 230, 245);
  doc.text('• Student Accommodation: On-campus university halls and accredited PBSA housing assistance', margin + 6, y + 13);
  doc.text('• Airport Pickup: Direct airport transfer coordination from terminal to student apartment', margin + 6, y + 18);
  doc.text('• Forex, Banking & SIM: Zero-markup currency cards, international student bank account setup', margin + 6, y + 23);

  y += 32;

  // Contact Footer Box
  checkPageBreak(18);
  doc.setFillColor(250, 247, 240);
  doc.setDrawColor(210, 185, 130);
  doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(7, 18, 40);
  doc.text('NEED PERSONALIZED ADMISSION COUNSELLING?', margin + 5, y + 5.5);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(90, 90, 90);
  doc.text('Call or WhatsApp our Senior Counsellor directly: +91 85007 22284 | Visit: www.aegisoverseas.com', margin + 5, y + 10);

  // Add headers/footers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    addHeader();
    addFooter();
  }

  // Trigger browser download directly to local system
  const filename = `Aegis_${dest.country.replace(/\s+/g, '_')}_Study_Abroad_Guide.pdf`;
  doc.save(filename);
};
