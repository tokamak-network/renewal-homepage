<template>
  <div class="comparison-container">
    <div class="title">
      {{ $t("solutions.comparison.title") }}
    </div>
    <div class="description">
      {{ $t("solutions.comparison.description") }}
    </div>
    <table class="comparison-table">
      <thead>
        <tr>
          <th class="table-header title"></th>
          <th class="table-header">Sidechain</th>
          <th class="table-header">Plasma</th>
          <th class="table-header">Optimistic Rollup</th>
          <th class="table-header">Zk-Rollup</th>
          <th class="table-header">Validium</th>
          <th class="table-header">Polygon</th>
          <th class="table-header-tokamak">Tokamak Network</th>
        </tr>
      </thead>
      <tbody>
        <tr class="second-row">
          <td class="content-title">Scalability</td>
          <td class="content">Medium</td>
          <td class="content">Very High</td>
          <td class="content">Medium</td>
          <td class="content">Medium</td>
          <td class="content">High</td>
          <td class="content">Medium-High</td>
          <td class="content-tokamak">Medium-High</td>
        </tr>
        <tr>
          <td class="content-title">Security</td>
          <td class="content">Low</td>
          <td class="content">Low</td>
          <td class="content">High</td>
          <td class="content">Very High</td>
          <td class="content">Medium</td>
          <td class="content">High</td>
          <td class="content-tokamak">High-Very High</td>
        </tr>
        <tr class="second-row">
          <td class="content-title">Interoperability</td>
          <td class="content">Low</td>
          <td class="content">Low</td>
          <td class="content">Medium</td>
          <td class="content">Medium</td>
          <td class="content">Medium</td>
          <td class="content">Medium</td>
          <td class="content-tokamak">High</td>
        </tr>
        <tr>
          <td class="content-title">Ethereum Compatibility</td>
          <td class="content">Medium</td>
          <td class="content">High</td>
          <td class="content">High</td>
          <td class="content">High</td>
          <td class="content">High</td>
          <td class="content">High</td>
          <td class="content-tokamak">High</td>
        </tr>
        <tr class="second-row">
          <td class="content-title">Functionality</td>
          <td class="content">High</td>
          <td class="content">High</td>
          <td class="content">High</td>
          <td class="content">Low</td>
          <td class="content">Low</td>
          <td class="content">Low-High</td>
          <td class="content-tokamak">Low-High</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "ComparisonContainer.scss";
</style>
