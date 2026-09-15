import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShieldCheck, ArrowRight, CheckCircle2, Globe, Truck } from 'lucide-react';
import { CartItem, CurrencyCode } from '../types';
import { CURRENCIES } from '../data/internationalData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  currentCurrency: CurrencyCode;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentCurrency
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const currencyInfo = CURRENCIES[currentCurrency];
  const subtotalUSD = items.reduce((sum, item) => sum + (item.product.priceUSD * item.quantity), 0);
  const freeShippingThresholdUSD = 50.0;
  const isFreeShipping = subtotalUSD >= freeShippingThresholdUSD;
  const shippingUSD = isFreeShipping || subtotalUSD === 0 ? 0 : 7.50;
  const totalUSD = subtotalUSD + shippingUSD;

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed(true);
    }, 1200);
  };

  const handleFinishOrder = () => {
    setOrderConfirmed(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end">
      <div 
        className="w-full max-w-md bg-[#18100c] border-l border-[#3d291e] h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#2e1e16] bg-[#140e0b] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-[#f7f2ea]">Your Tasting Box</span>
            <span className="text-xs bg-[#c6934b]/20 text-[#e6b978] px-2 py-0.5 rounded font-semibold">
              {items.reduce((acc, i) => acc + i.quantity, 0)} Bars
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#a69284] hover:text-white bg-[#221611] hover:bg-[#322018] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-[#1e140f] border-b border-[#2d1d15] text-xs">
          {isFreeShipping ? (
            <div className="flex items-center gap-2 text-[#7ae08d] font-semibold">
              <Truck className="w-4 h-4 text-[#7ae08d]" />
              <span>Unlocked: Free International Express Dispatch!</span>
            </div>
          ) : (
            <div className="space-y-1.5">
              <div className="flex justify-between text-[#b8a698]">
                <span>Add {currencyInfo.format(freeShippingThresholdUSD - subtotalUSD)} more for Free Worldwide Dispatch</span>
                <span className="text-[#e6b978] font-semibold">
                  {Math.round((subtotalUSD / freeShippingThresholdUSD) * 100)}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#2a1b14] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#c6934b] to-[#7ae08d] transition-all duration-300"
                  style={{ width: `${Math.min(100, (subtotalUSD / freeShippingThresholdUSD) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
              <div className="w-16 h-16 rounded-full bg-[#241712] flex items-center justify-center text-[#a69284]">
                <Globe className="w-8 h-8 text-[#c6934b]/60" />
              </div>
              <h4 className="font-display font-bold text-base text-[#f7f2ea]">Your box is empty</h4>
              <p className="text-xs text-[#a69284] max-w-xs font-light">
                Select your functional bars from our zero-sugar, vitamin-fortified organic collection.
              </p>
            </div>
          ) : (
            items.map(item => (
              <div 
                key={item.product.id}
                className="p-3.5 rounded-xl bg-[#1e140f] border border-[#38261c] flex items-center gap-3.5"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-lg object-cover bg-[#140e0b]"
                  referrerPolicy="no-referrer"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <h5 className="font-display font-bold text-sm text-[#f7f2ea] truncate">
                      {item.product.name}
                    </h5>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-[#a69284] hover:text-[#e06d6d] transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[11px] text-[#e6b978] truncate">
                    {item.product.vitamins[0]?.name.split('(')[0]}
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#2a1b14]">
                    <div className="text-xs font-bold text-[#f7f2ea]">
                      {currencyInfo.format(item.product.priceUSD * item.quantity)}
                    </div>

                    <div className="flex items-center gap-2 bg-[#140e0b] border border-[#3b271d] rounded-md px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="text-[#a69284] hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold px-1 text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="text-[#a69284] hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#2e1e16] bg-[#140e0b] space-y-3">
            <div className="space-y-1.5 text-xs text-[#b8a698]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white">{currencyInfo.format(subtotalUSD)}</span>
              </div>
              <div className="flex justify-between">
                <span>International Dispatch</span>
                <span className={isFreeShipping ? 'text-[#7ae08d] font-semibold' : 'text-white'}>
                  {isFreeShipping ? 'FREE' : currencyInfo.format(shippingUSD)}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#241712]">
                <span>Total ({currentCurrency})</span>
                <span className="text-[#e6b978] text-base">{currencyInfo.format(totalUSD)}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 rounded-lg bg-[#c6934b] hover:bg-[#d5a359] text-[#140e0b] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-60"
            >
              {isCheckingOut ? (
                <span>Routing to Regional Hub...</span>
              ) : (
                <>
                  <span>Dispatch via Regional Fulfillment</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#a69284]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#7ae08d]" />
              <span>Cold-chain guaranteed • 100% Organic certified</span>
            </div>
          </div>
        )}

        {/* Order Confirmation Modal */}
        {orderConfirmed && (
          <div className="absolute inset-0 bg-[#140e0b]/95 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center space-y-4 z-50">
            <div className="w-16 h-16 rounded-full bg-[#1a2e1d] border border-[#3b7a48] flex items-center justify-center text-[#7ae08d]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-[#f7f2ea]">
              Dispatch Confirmed!
            </h3>

            <p className="text-xs text-[#b8a698] max-w-xs font-light leading-relaxed">
              Your order has been routed to the nearest regional fulfillment center (USA, EU, UK, or Asia-Pacific hub). You will receive temperature-monitored tracking details shortly.
            </p>

            <div className="p-3 bg-[#1e140f] rounded-lg border border-[#3b271d] text-xs text-[#e6b978] font-semibold w-full max-w-xs">
              Order Total: {currencyInfo.format(totalUSD)} ({currentCurrency})
            </div>

            <button
              onClick={handleFinishOrder}
              className="px-6 py-2.5 rounded-lg bg-[#c6934b] text-[#140e0b] font-bold text-xs transition-all cursor-pointer"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
