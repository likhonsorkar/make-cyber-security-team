import { ShoppingCart } from 'lucide-react';
const Card = ({expert, addToCart}) => {
    return (
        <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl shadow-lg border border-cyan-500/20">
            <img className="w-20 h-20 rounded-full border-2 border-cyan-400"
                src={expert.img} />

            <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-400">{expert.name}</h3>
                <p className="text-gray-300 text-sm">{expert.designation}</p>
                <p className="text-gray-400 text-sm">📍 {expert.address}</p>
                <p className="text-gray-200 font-semibold mt-1">${expert.salary}</p>
            </div>
            <button
                onClick={() => addToCart(expert)}
                className="px-3 py-2 bg-cyan-500 hover:bg-cyan-600text-black font-semibold rounded-lg transition flex flex-col items-center justify-center gap-1">
                    <ShoppingCart /> Add
            </button>
        </div>
    );
};

export default Card;