export function RightSidebar() {
    return (
        <div className="col-start-11 col-span-2 row-start-1 flex flex-col justify-end gap-3">
            <div className="fixed bottom-5 flex flex-col justify-end h-screen gap-2 p-3 ">
                <h4 className="font-semibold text-lg">Join over 500+ designers sharing their stories.</h4>
                <p className="font-light">Receive regular tips on how to start your design career.</p>
                <form className="flex flex-col" action="">
                    <input className="p-2 mb-2 border-black border-b-2" type="text" id="email" placeholder="name@email.com" />
                    <input className="bg-slate-500 mt-2 p-3 hover:bg-slate-300 cursor-pointer" type="submit" />

                </form>
            </div>
        </div>
    )
}