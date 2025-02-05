import { Newsletter } from '@prisma/client';

export const newsletterTemplate = (newsletter: Newsletter) => {
  const truncatedContent =
    newsletter.content.length > 100
      ? newsletter.content.substring(0, 100) + '...'
      : newsletter.content;

  return `
        <a href="${process.env.FRONTEND_URL}/articles/detail/${newsletter.id}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    role="link" 
                    style="
                        display: flex !important; 
                        color: inherit !important;
                        text-decoration: none !important;
                        max-width: 600px !important;
                        margin: 0 auto !important;
                        border: 1px solid rgba(55, 53, 47, 0.16) !important;
                        border-radius: 4px !important;
                        transition: background 0.2s ease-in !important;
                        min-height: 124px !important;
                        flex-direction: row !important;
                        align-items: stretch !important;
                        text-align: left !important;
                        margin-bottom: 12px !important;
                    "
                    >
                    <div style="
                        width: 100% !important;
                        padding: 16px !important;
                        overflow: hidden !important;
                        flex-shrink: 0 !important;
                        display: block !important;
                    ">
                        <div style="
                        font-size: 18px;
                        font-weight: 600;
                        margin-bottom: 8px;
                        color: rgb(55, 53, 47);
                        ">${newsletter.title}</div>
                        
                        ${
                          newsletter.imageUrl
                            ? `
                        <div style="
                        width: 100%;
                        height: 200px;
                        margin-bottom: 8px;
                        overflow: hidden;
                        position: relative;
                        border-radius: 4px;
                        ">
                        <img src="${newsletter.imageUrl}" 
                            style="
                            width: 100%;
                            height: 200px;
                            object-fit: cover;
                            object-position: center;
                            "
                            alt="${newsletter.title}"
                        />
                        </div>
                        `
                            : ''
                        }
                        
                        <div style="
                        font-size: 14px;
                        line-height: 1.5;
                        color: rgba(55, 53, 47, 0.85);
                        margin-bottom: 8px;
                        ">${truncatedContent}</div>
                        
                        <div style="
                        font-size: 13px;
                        color: rgba(55, 53, 47, 0.5);
                        ">
                        카테고리 ID: ${newsletter.categoryId} • 
                        조회수: ${newsletter.viewcount} • 
                        작성일: ${new Date(newsletter.createdAt).toLocaleDateString('ko-KR')}
                        </div>
                    </div>
                    </a>
  `;
};
