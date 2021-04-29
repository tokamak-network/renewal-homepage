<template>
  <div class="comparison-container">
    <div class="title-section">
      <div class="title">
        {{ $t("solutions.comparison.title") }}
      </div>
      <div class="description">
        {{ $t("solutions.comparison.description") }}
      </div>
    </div>
    <div class="outer-mobile-table">
      <div class="inner-mobile-table">
        <table class="comparison-table">
          <tbody>
            <tr>
              <th
                style="
                  border: 1px solid #eff1f6;
                  margin-top: -2px;
                  margin-left: -1px;
                "
                class="top"
              ></th>
              <td class="table-header-tokamak" style="padding-top: -1px">
                Tokamak Network
              </td>
              <td class="table-header">Sidechain</td>
              <td class="table-header">Plasma</td>
              <td class="table-header">Optimistic Rollup</td>
              <td class="table-header">Zk-Rollup</td>
              <td class="table-header">Validium</td>
              <td class="table-header">Polygon</td>
            </tr>
            <tr class="second-row" style="background: #f9fcff">
              <th class="content-title" style="background: #f9fcff">
                <div class="margin-second">Scalability</div>
              </th>
              <td class="content-tokamak">Medium-High</td>
              <td class="content">Medium</td>
              <td class="content">Very High</td>
              <td class="content">Medium</td>
              <td class="content">Medium</td>
              <td class="content">High</td>
              <td class="content">Medium-High</td>
            </tr>
            <tr>
              <th class="content-title">
                <div class="margin-second">Security</div>
              </th>
              <td class="content-tokamak">High-Very High</td>
              <td class="content">Low</td>
              <td class="content">Low</td>
              <td class="content">High</td>
              <td class="content">Very High</td>
              <td class="content">Medium</td>
              <td class="content">High</td>
            </tr>
            <tr class="second-row" style="background: #f9fcff">
              <th class="content-title" style="background: #f9fcff">
                <div class="margin-second">Interoperability</div>
              </th>
              <td class="content-tokamak">High</td>
              <td class="content">Low</td>
              <td class="content">Low</td>
              <td class="content">Medium</td>
              <td class="content">Medium</td>
              <td class="content">Medium</td>
              <td class="content">Medium</td>
            </tr>
            <tr>
              <th class="content-title">
                <div class="margin-second">Ethereum Compatibility</div>
              </th>
              <td class="content-tokamak">High</td>
              <td class="content">Medium</td>
              <td class="content">High</td>
              <td class="content">High</td>
              <td class="content">High</td>
              <td class="content">High</td>
              <td class="content">High</td>
            </tr>
            <tr class="second-row" style="background: #f9fcff">
              <th class="content-title" style="background: #f9fcff">
                <div class="margin-second">Functionality</div>
              </th>
              <td class="content-tokamak-last">Low-High</td>
              <td class="content">High</td>
              <td class="content">High</td>
              <td class="content">High</td>
              <td class="content">Low</td>
              <td class="content">Low</td>
              <td class="content">Low-High</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "ComparisonContainer.scss";
@import "ComparisonContainer-tablet.scss";
@import "ComparisonContainer-mobile.scss";
</style>
