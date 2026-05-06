// Generate professional team avatars
export const generateTeamAvatar = (name: string, role: string) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  const colors = [
    ['#A259C6', '#7B2FF2'],
    ['#38BDF8', '#0EA5E9'],
    ['#10B981', '#059669'],
    ['#F59E0B', '#D97706'],
    ['#EF4444', '#DC2626'],
    ['#8B5CF6', '#7C3AED']
  ];
  
  const colorIndex = name.length % colors.length;
  const [color1, color2] = colors[colorIndex];
  
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" fill="url(#gradient)"/>
      <text x="50" y="58" font-family="Poppins, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="white">${initials}</text>
    </svg>
  `)}`;
};

// Pre-generated team avatars
export const teamAvatars = {
  'Rahul Sharma': generateTeamAvatar('Rahul Sharma', 'Lead Software Architect'),
  'Priya Patel': generateTeamAvatar('Priya Patel', 'AI/ML Specialist'),
  'Amit Kumar': generateTeamAvatar('Amit Kumar', 'Senior Project Manager'),
  'Neha Singh': generateTeamAvatar('Neha Singh', 'UX Designer'),
  'Vikram Mehta': generateTeamAvatar('Vikram Mehta', 'Frontend Developer'),
  'Rajesh Verma': generateTeamAvatar('Rajesh Verma', 'Digital Transformation Lead')
}; 