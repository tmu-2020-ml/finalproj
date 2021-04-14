<div class="dna-icon">
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
  <div class="strain" />
</div>

<style>
  .dna-icon {
    position: fixed;
    bottom: 0;
    right: 4rem;
    z-index: -1;
  }

  .strain {
    width: 155px;
    height: 1px;
    background-color: #dbdbdb;
    position: relative;
    margin: 0px auto;
    margin-top: 28px;
    margin-bottom: 28px;
    animation-name: rotate-strain;
    animation-duration: 1.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
  .strain:before {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #13b6e2;
    left: 0;
    margin-top: -9px;
    margin-left: -9px;
    animation-name: strain-size-left;
    animation-duration: 1.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
  .strain:after {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #13b6e2;
    right: 0;
    margin-top: -9px;
    margin-right: -9px;
    animation-name: strain-size-right;
    animation-duration: 1.7s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-play-state: running;
  }
  .strain:nth-child(1),
  .strain:nth-child(1):before,
  .strain:nth-child(1):after {
    animation-delay: 0.15s;
  }
  .strain:nth-child(2),
  .strain:nth-child(2):before,
  .strain:nth-child(2):after {
    animation-delay: 0.3s;
  }
  .strain:nth-child(3),
  .strain:nth-child(3):before,
  .strain:nth-child(3):after {
    animation-delay: 0.45s;
  }
  .strain:nth-child(4),
  .strain:nth-child(4):before,
  .strain:nth-child(4):after {
    animation-delay: 0.6s;
  }
  .strain:nth-child(5),
  .strain:nth-child(5):before,
  .strain:nth-child(5):after {
    animation-delay: 0.75s;
  }
  .strain:nth-child(6),
  .strain:nth-child(6):before,
  .strain:nth-child(6):after {
    animation-delay: 0.9s;
  }
  .strain:nth-child(7),
  .strain:nth-child(7):before,
  .strain:nth-child(7):after {
    animation-delay: 1.05s;
  }
  .strain:nth-child(8),
  .strain:nth-child(8):before,
  .strain:nth-child(8):after {
    animation-delay: 1.2s;
  }
  .strain:nth-child(9),
  .strain:nth-child(9):before,
  .strain:nth-child(9):after {
    animation-delay: 1.35s;
  }
  .strain:nth-child(10),
  .strain:nth-child(10):before,
  .strain:nth-child(10):after {
    animation-delay: 1.5s;
  }
  .strain:nth-child(11),
  .strain:nth-child(11):before,
  .strain:nth-child(11):after {
    animation-delay: 1.65s;
  }
  .strain:nth-child(12),
  .strain:nth-child(12):before,
  .strain:nth-child(12):after {
    animation-delay: 1.8s;
  }

  @keyframes rotate-strain {
    0% {
      width: 155px;
    }
    25% {
      width: 0;
    }
    50% {
      width: 155px;
    }
    75% {
      width: 0;
    }
    100% {
      width: 155px;
    }
  }
  @keyframes strain-size-left {
    0% {
      transform: scale(1) translateX(0px);
    }
    25% {
      transform: scale(0.5);
    }
    50% {
      transform: scale(1) translateX(155px);
    }
    75% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
  @keyframes strain-size-right {
    0% {
      transform: scale(1) translateX(0px);
    }
    25% {
      transform: scale(1.5);
    }
    50% {
      transform: scale(1) translateX(-155px);
    }
    75% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1) translateX(0px);
    }
  }
</style>
