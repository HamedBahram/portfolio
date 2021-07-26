import Link from 'next/link'

const BlogPostSummary = ({ title, summary, slug }) => {
    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <div className='mb-4'>
                    <div className='flex justify-between items-center gap-4'>
                        <h4 className='text-lg font-medium'>{title}</h4>
                        <p className='text-gray-600 dark:text-gray-400'>54 views</p>
                    </div>
                    <p className='text-gray-600 dark:text-gray-500'>{summary}</p>
                </div>
            </a>
        </Link>
    )
}

export default BlogPostSummary
