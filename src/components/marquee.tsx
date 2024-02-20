const Marquee = () => {
    return (
        <div className="flex overflow-x-hidden bg-red-600 py-1 text-white">
            <div className="py-0 animate-marquee whitespace-nowrap">
                <span className="text-xl mx-4 font-semibold">SALE | Mini shed for only $950</span>
                <span className="text-xl mx-4 font-semibold">SALE | Mini shed for only $950</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
            </div>

            <div className="animate-marquee2 whitespace-nowrap">
                <span className="text-xl mx-4 font-semibold">SALE</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
                <span className="text-xl mx-4 font-semibold">SALE</span>
            </div>
        </div>
    )
}

export default Marquee;