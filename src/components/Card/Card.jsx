import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="blob" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:20px
    
    ;
  }

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 190px;
  height: 240px;
  z-index: 2;
  background: linear-gradient(-15deg, #1c1c22 66%, #D2B48C 100%);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
  transition: background 0.5s ease-in-out;
}



  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #D2B48C;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }`;

export default Card;
