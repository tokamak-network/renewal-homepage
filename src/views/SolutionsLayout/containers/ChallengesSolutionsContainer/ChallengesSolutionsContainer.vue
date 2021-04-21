<template>
  <div class="challenge-main">
    <div class="challenges">
      <div class="container">
        <div class="challenges-title">Challenge</div>
        <div class="challenges-description">
          Ethereum, a powerful platform for decentralized applications, has
          limitations.

          <ul>
            <li>Low TPS</li>
            <li>High transaction fee</li>
            <li>No customization</li>
          </ul>
          Many projects are exploring Ethereum-compatible blockchains as a way
          to mitigate these limitations while still leveraging Ethereum’s
          thriving ecosystem. However, there is no specialized framework to
          build such blockchains nor a protocol to connect them. This introduces
          significant development challenges and causes ecosystem fragmentation.
        </div>
      </div>
      <div class="image-container">
        <img class="image" src="../../../../assets/challenge.png" />
      </div>
    </div>
    <div class="challenges">
      <div class="image-container">
        <img class="image" src="../../../../assets/solution.png" />
      </div>
      <div class="container">
        <div class="challenges-title">Solution</div>
        <div class="challenges-description">
          <ul>
            <li>Easy custom layer 2 network deployment</li>
            <li>Support all types of layer 2 protocols</li>
            <li>
              Ensure full verification from day one within Tokamak Network
              ecosystem
            </li>
            <li>Support interoperability via Cross-layer Message Protocol</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "ChallengesSolutionsContainer.scss";
</style>
