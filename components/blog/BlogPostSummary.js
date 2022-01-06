import Link from 'next/link'
import useSWR from 'swr'
import fetcher from '@/lib/fetcher'

const BlogPostSummary = ({ title, summary, slug }) => {
    const { data } = useSWR(`/api/views/${slug}`, fetcher)
    const views = Number(data ? data.total : 0)

    return (
        <Link href={`/blog/${slug}`}>
            <a>
                <div className='mb-6'>
                    <div className='flex justify-between items-center gap-4'>
                        <h4 className='font-semibold'>{title}</h4>
                        <p className='text-gray-500'>
                            {`${views > 0 ? views.toLocaleString() : '---'} views`}
                        </p>
                    </div>
                    <p className='text-gray-500'>{summary}</p>
                </div>
            </a>
        </Link>
    )
}

export default BlogPostSummary
