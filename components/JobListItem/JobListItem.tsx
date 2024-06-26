import { FcMoneyTransfer } from 'react-icons/fc'
import { MdLocationPin } from "react-icons/md"
import { BsFillBriefcaseFill, BsCalendar2XFill } from "react-icons/bs"
import Link from 'next/link'
import { JobItem } from '@/types/Job'


const JobListItem = ({ job }: { job: JobItem }) => {
    return (
        <div className="border-solid border-sky-200 border-2 rounded-xl p-4 flex items-center gap-4 w-full max-w-[800px] bg-white sm:flex-row x-sm:flex-col x-sm:gap-8 ">
            <div className="w-full">
                <h3 className="sm:text-[2rem] x-sm:text-[1.6rem] bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent font-[600]">{job.job_title}</h3>
                <h4 className="font-[600] flex gap-2 items-center mt-1"><FcMoneyTransfer fontSize={16} /> <span className="pb-[4px] text-[14px]">{job.salary_range.from.toLocaleString()} INR to {job.salary_range.to.toLocaleString()} INR</span></h4>
                <div className="text-gray-700 flex gap-8 mt-6">
                    <p className="flex gap-2 items-center text-[.8rem]">
                        <MdLocationPin fontSize={13} className="text-blue-500" />
                        <span>{job.city}</span>
                    </p>
                    <p className="flex gap-2 items-center text-[.8rem]">
                        <BsFillBriefcaseFill fontSize={13} className="text-blue-500" />
                        <span>{job.job_type}</span>
                    </p>
                    <p className="flex gap-2 items-center text-[.8rem]">
                        <BsCalendar2XFill fontSize={13} className="text-red-500" />
                        <span>{new Date(job.deadline).toLocaleDateString()}</span>
                    </p>
                </div>
            </div>
            <div className="flex items-center">
                <Link href={`/jobs/${job.slug}`} className="flex gap-2 bg-blue-500 text-white py-3 px-6 w-fit text-lg rounded">
                    <span className="whitespace-nowrap">Job Details</span>
                    <span>&rarr;</span>
                </Link>
            </div>
        </div>
    )
}

export default JobListItem