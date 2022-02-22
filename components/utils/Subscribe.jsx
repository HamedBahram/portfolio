import React from 'react'

const Subscribe = () => {
  return (
    <div className="rounded-md border border-slate-700 bg-[#282c34] p-8 pb-12">
      <p className="mb-6 text-xl font-bold">
        Get updates on new notes and projects
      </p>
      <form>
        <div className="flex items-center justify-between rounded-md border border-slate-700 p-1 focus-within:outline focus-within:outline-1 focus-within:outline-react-link">
          <input
            type="text"
            className="grow bg-transparent px-3  py-1 outline-none placeholder:text-gray-500"
            placeholder="your@email.com"
          />
          <input
            type="submit"
            value="Subscribe"
            className="rounded-md bg-slate-700 px-5  py-1 hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  )
}

export default Subscribe
