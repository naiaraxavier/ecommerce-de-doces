import { useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import Swal from 'sweetalert2';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState(() => {
    const storedQuantities = localStorage.getItem('quantities');
    return storedQuantities ? JSON.parse(storedQuantities) : {};
  });

  console.log(quantities);

  const maxQuantity = 5; // Defina a quantidade máxima permitida

  const addToCart = useCallback(async (productId) => {
    try {
      // Verificar se o produto já está no carrinho
      const isProductInCart = cart.some(item => item.product_id === productId);

      if (isProductInCart) {
        // Verificar se a quantidade já atingiu o máximo permitido
        if ((quantities[productId] || 0) < maxQuantity) {
          // Atualizar a quantidade do produto
          setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
          }));

          Swal.fire({
            position: "bottom-end",
            title: "Quantidade do produto atualizada",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'swal2-small',
              title: 'swal2-title-small',
              container: 'swal2-container',
            }
          });
        } else {
          // Se a quantidade já atingiu o máximo permitido, exibir mensagem de erro
          Swal.fire({
            position: "bottom-end",
            title: "Quantidade máxima atingida para este produto",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'swal2-small',
              title: 'swal2-title-small',
              container: 'swal2-container',
            }
          });
        }
      } else {
        // Se o produto não estiver no carrinho, adicionar ao carrinho
        const response = await fetch(`http://localhost:5000/api/cart/add/${productId}`, {
          method: 'POST',
        });

        if (!response.ok) {
          throw new Error('Erro ao adicionar produto ao carrinho');
        }

        // Adicionar o produto ao carrinho
        setCart(prevCart => [...prevCart, { product_id: productId }]);


        // Inicializar a quantidade do produto
        const spanValue = parseInt(document.getElementById("span-quantity").textContent);
        setQuantities(prevQuantities => ({
          ...prevQuantities,
          [productId]: spanValue > 1 ? spanValue : 1
        }));


        Swal.fire({
          position: "bottom-end",
          title: "Produto adicionado ao carrinho com sucesso!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'swal2-small',
            title: 'swal2-title-small',
            container: 'swal2-container',
          }
        });
      }
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      Swal.fire({
        position: "bottom-end",
        title: "Erro ao adicionar o produto ao carrinho, tente novamente",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'swal2-small',
          title: 'swal2-title-small',
          container: 'swal2-container',
        }
      });
    }
  }, [cart, setCart, quantities, setQuantities, maxQuantity]);


  const removeCartItem = useCallback(async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/remove/${productId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover produto do carrinho');
      }

      setCart(prevCart => prevCart.filter(item => item.product_id !== productId));
      setQuantities(prevQuantities => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[productId];
        return updatedQuantities;
      });
      Swal.fire({
        position: "bottom-end",
        title: "Produto removido do carrinho com sucesso!",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'swal2-small',
          title: 'swal2-title-small',
          container: 'swal2-container',
        }
      });
    } catch (error) {
      console.error('Erro ao remover produto do carrinho:', error);
      Swal.fire({
        position: "bottom-end",
        title: "Erro ao remover o produto do carrinho, tente novamente",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: 'swal2-small',
          title: 'swal2-title-small',
          container: 'swal2-container',
        }
      });
    }
  }, [setCart, setQuantities]);

  const increaseQuantity = useCallback((productId) => {
    if ((quantities[productId] || 0) < maxQuantity) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: (prevQuantities[productId] || 0) + 1
      }));
    } else {
      // Se a quantidade já atingiu o máximo permitido, exibir mensagem de erro
      Swal.fire({
        position: "bottom-end",
        title: "Quantidade máxima atingida para este produto",
        icon: "error",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }, [quantities, maxQuantity, setQuantities]);

  const decreaseQuantity = useCallback((productId) => {
    setQuantities(prevQuantities => {
      const updatedQuantities = {
        ...prevQuantities,
        [productId]: prevQuantities[productId] ? prevQuantities[productId] - 1 : 0
      };

      if (updatedQuantities[productId] === 0) {
        delete updatedQuantities[productId];
        removeCartItem(productId);
      }

      return updatedQuantities;
    });
  }, [removeCartItem]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart');
      const data = await response.json();
      setCart(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('quantities', JSON.stringify(quantities));
    fetchData();
  }, [quantities]);

  const values = useMemo(() => ({
    cart,
    loading,
    isCartOpen,
    setIsCartOpen,
    quantities,
    setQuantities,
    increaseQuantity,
    decreaseQuantity,
    addToCart,
    removeCartItem
  }), [cart, loading, isCartOpen, setIsCartOpen, quantities, setQuantities, increaseQuantity, decreaseQuantity, addToCart, removeCartItem]);

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
