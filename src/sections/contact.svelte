<script lang="ts">
  import Avatar from '../parts/avatar.svelte';
</script>

<ul class="flex flex-wrap lg:flex-nowrap">
  <li class="flex-1 p-3">
    <Avatar name="Chen Chi Ya" image="/avatars/chen_chi_ya.jpg" />
    <ul class="list-disc list-inside">
      <li>Clinical statistics.</li>
      <li>Survial Analysis.</li>
      <li>KM plot using SAS.</li>
    </ul>
  </li>

  <li class="flex-1 p-3">
    <Avatar name="Chen Yan Jin" />
    <ul class="list-disc list-inside">
      <li>Data preprocessing using R.</li>
      <li>Calculation of Chi-square test, OR, 95% CI and p-value using SAS.</li>
      <li>Clinicopathological correlation.</li>
    </ul>
  </li>

  <li class="flex-1 p-3">
    <Avatar name="Huang Bo Shih" image="/avatars/huang_bo_shih.jpg" />
    <ul class="list-disc list-inside">
      <li>PCA analysis.</li>
      <li>Project organization.</li>
    </ul>
  </li>

  <li class="flex-1 p-3">
    <Avatar name="Su Jing Jhong" image="/avatars/su_jing_jhong.jpg" />
    <ul class="list-disc list-inside">
      <li>Data processing and ML classification model implementation.</li>
      <li>Setup and design the website.</li>
    </ul>
  </li>

  <li class="flex-1 p-3">
    <Avatar name="Tsao Yen Ping" image="/avatars/tsao_yen_ping.jpg" />
    <ul class="list-disc list-inside">
      <li>ROC chart for MTBP, KIF14 using R.</li>
      <li>
        Contingency table, calculation of sensitivity, specificity and AUC for
        MTBP, KIF14 and combined genes.
      </li>
    </ul>
  </li>
</ul>
