export default function Skeleton() {
    return (
        <div>
            <div className="w-96 shadow-xl bg-white rounded-lg border-gray-100 border mt-2 animate-pulse">

                <div className="relative p-6 mt-4 w-11/12 mx-auto rounded-lg bg-gray-200" style={{ height: 350 }}>
                    
                </div>

                <div className="relative rounded-t-none p-6">

                    <h1 className="bg-gray-200 mt-1 mb-3 h-6"></h1>

                    <div className="flex mb-4 h-6">
                        <div className="bg-gray-200 h-5 w-20 mr-3 rounded-full"></div>
                        
                        <div className="bg-gray-200 h-5 w-20 rounded-full"></div>
                    </div>

                    <div className="mb-4 bg-gray-200 h-10"></div>

                    <div className="bg-gray-200 mb-5 p-2 rounded-lg h-14"></div>

                    <div className="bg-gray-200 rounded-full w-8 h-8"></div>
                </div>
            </div>
        </div>
    )
}
