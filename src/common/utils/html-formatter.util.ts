export function formatNewsletterContent(contentAsHTML: string): string {
  return contentAsHTML
    .replace(/```/g, '')
    .replace(/html/g, '')
    .replace(/\n\s*/g, '') // 불필요한 줄바꿈과 공백 제거
    .replace(
      /<p>/g,
      '<p style="margin: 0.8em 0; line-height: 1.6; color: #333;">',
    )
    .replace(
      /<h1>/g,
      '<h1 style="color: #1a0dab; font-size: 24px; margin: 1em 0 0.5em 0;">',
    )
    .replace(
      /<h2>/g,
      '<h2 style="color: #333; font-size: 20px; margin: 1em 0 0.5em 0;">',
    )
    .replace(
      /<div>/g,
      '<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">',
    );
}
