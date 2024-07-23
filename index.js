<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Unblock Game</title>
<style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
    }

    .container {
        display: inline-block;
        margin-top: 20px;
    }

    .block {
        width: 50px;
        height: 50px;
        background-color: #3498db;
        display: inline-block;
        margin: 5px;
    }

    .empty {
        width: 50px;
        height: 50px;
        display: inline-block;
        margin: 5px;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        margin-top: 20px;
        cursor: pointer;
        background-color: #2ecc71;
        border: none;
        color: white;
    }
</style>
</head>
<body>
<h1>Unblock Game</h1>
<div class="container" id="container">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
    <div class="block">7</div>
    <div class="block">8</div>
    <div class="empty"></div>
</div>
<button id="shuffleBtn">Shuffle</button>

<script>
    const blocks = document.querySelectorAll('.block');
    const empty = document.querySelector('.empty');
    const shuffleBtn = document.getElementById('shuffleBtn');

    let blocksArray = Array.from(blocks);

    const shuffleBlocks = () => {
      blocksArray = blocksArray.sort(() => Math.random() - 0.5);
      blocksArray.forEach((block, index) => {
        block.style.order = index;
      });
    };

    const checkWin = () => {
      const orderArray = blocksArray.map((block) => parseInt(block.innerHTML));
      if (orderArray.every((value, index) => value === index + 1)) {
        alert('Congratulations! You win!');
      }
    };

    blocks.forEach((block) => {
      block.addEventListener('click', () => {
        const emptyOrder = parseInt(empty.style.order);

        if (Math.abs(parseInt(block.style.order) - emptyOrder) === 1 || Math.abs(parseInt(block.style.order) - emptyOrder) === 3) {
          const tempOrder = block.style.order;
          block.style.order = emptyOrder;
          empty.style.order = tempOrder;
        }

        checkWin();
      });
    });

    shuffleBtn.addEventListener('click', () => {
      shuffleBlocks();
    });

    shuffleBlocks();
</script>
</body>
</html>