import { Trash2 } from 'lucide-react';
const Cart = ({ cart , removeFromCart }) => {
    const totalCost = cart.reduce(
        (sum, person) => sum + person.salary,
        0
    );
    return (
        <div className="sticky top-6 p-6 bg-gray-900 rounded-xl shadow-xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 text-center">
                🛒 Cart
            </h3>
            <div className="mt-4 space-y-3 text-gray-300 text-sm">
                <p>
                    Selected Members:
                    <strong className="text-cyan-300"> {cart.length}</strong>
                </p>
                <div>
                    {cart.map(item =>
                       <div className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl shadow-lg border border-cyan-500/20">
                            <img className="w-10 h-10 rounded-full border-2 border-cyan-400"
                                src={item.img} />

                            <div className="flex-1">
                                <h3 className="text-base font-bold text-cyan-400">{item.name}</h3>
                                <p className="text-gray-300 text-xs">{item.designation}</p>
                                {/* <p className="text-gray-400 text-xs">📍 {item.address}</p> */}
                                <p className="text-gray-200 font-semibold mt-1">${item.salary}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item)}
                                className="px-3 py-2 bg-cyan-500 hover:bg-cyan-600
               text-black font-semibold rounded-lg transition
               flex flex-col items-center justify-center gap-1">
                                <Trash2 /> Delete
                            </button>
                        </div>
                   )}
                </div>
                <p>
                    Total Cost:
                    <strong className="text-cyan-300">
                        ${totalCost}
                    </strong>
                </p>
            </div>
            <button
                className="mt-6 w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition"
            >
                Hire Team
            </button>
        </div>
    );
};

export default Cart;
