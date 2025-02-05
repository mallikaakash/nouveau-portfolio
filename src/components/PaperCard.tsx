import React from 'react'

interface PaperCardProps {
    title: string;
    abstract: string;
    conference: string;
    status: string;
    paperLink: string;
}
const PaperCard: React.FC<PaperCardProps> = ({ title, abstract, conference, status, paperLink }) => {
    return (
        <div className="mt-4 pb-4 border-b-2 border-dotted border-neutral-300/70 dark:border-neutral-700/50">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                    {title}
                </h2>
                <a 
                    href={paperLink}
                    className={`inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors pl-10 ${paperLink === '' ? 'hidden' : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Paper
                    <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 line-clamp-2">
                {abstract}
            </p>
            <div className="text-xs text-neutral-500 dark:text-neutral-500">
                {conference} [{' '}<span className="font-bold">{status}</span>{' '}]
            </div>
        </div>
    )
}
export default PaperCard
