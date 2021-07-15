export default function Skeleton() {
    return (
        <div className="w-screen sm:w-auto">
            <div id="card" className="shadow-xl bg-white rounded-lg border-gray-100 border mt-2 animate-pulse dark:bg-gray-800 dark:border-gray-700 w-11/12 sm:w-96 m-auto sm:m-0">

                <div className="skeleton-img relative p-6 mt-4 w-11/12 mx-auto rounded-lg bg-gray-200 dark:bg-gray-700">
                </div>

                <div className="relative rounded-t-none p-6">

                    <h1 className="bg-gray-200 dark:bg-gray-700 mt-1 mb-3 h-6"></h1>

                    <div className="flex mb-4 h-6">
                        <div className="bg-gray-200 dark:bg-gray-700 h-5 w-20 mr-3 rounded-full"></div>
                        
                        <div className="bg-gray-200 dark:bg-gray-700 h-5 w-20 rounded-full"></div>
                    </div>

                    <div className="mb-4 bg-gray-200 dark:bg-gray-700 h-10"></div>

                    <div className="bg-gray-200 dark:bg-gray-700 mb-5 p-2 rounded-lg h-14"></div>

                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full w-8 h-8"></div>
                </div>
            </div>
        </div>
    )
}
