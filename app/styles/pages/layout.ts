import Link from "next/link";
import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    position: 'relative',
    backgroundColor: '$gray800',


    padding: '0.3rem',


    border: 0,
    borderRadius: '0.2rem',
    cursor: 'pointer',
    color: '$gray300',


    span: {
      position: 'absolute',
      top: '-6px',
      right: '-6px',
      background: '$green500',
      color: 'white',
      borderRadius: '999px',
      fontSize: '0.75rem',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid black'
    },

    '&:hover': {
      color: '$green500',
      transition: 'all 0.4s ease-in-out',
    },
  },
  
  variants: {
    isSuccess: {
      true: {
        justifyContent: 'center', // Centraliza a logo no meio
        margin: '0 auto',         // Garante centralização perfeita

        // Se houver algum padding ou margin específico que você usou 
        // para alinhar com o slider da Home, resetamos aqui:
        paddingLeft: 0,
      }
    }
  }
})


export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',


})

export const LinkLogo = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  textDecoration: 'none',
  color: 'white',

  '&:hover': {
    textDecoration: 'none',
  },

  '&:visited': {
    color: 'white',
  },
})


