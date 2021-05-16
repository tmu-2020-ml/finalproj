<script lang="ts">
  const top94Genes = [
    'MTBP',
    'KIF14',
    'DSCC1',
    'FAM72A',
    'CTHRC1',
    'WDR67',
    'FAM72D',
    'CCDC150',
    'C1QTNF6',
    'MCM8',
    'ZNF695',
    'MMP11',
    'XRCC2',
    'C5orf34',
    'AURKAPS1',
    'COL10A1',
    'PABPC1L',
    'FANCB',
    'HSPD1',
    'CST1',
    'DNMT3B',
    'COL11A1',
    'WNT2',
    'ZNF761',
    'MTL5',
    'RNFT2',
    'ZNF469',
    'ADAM12',
    'NT5DC4',
    'FAM176A',
    'FAM122B',
    'ADAMTS14',
    'KIF26B',
    'HOXC11',
    'AX746880',
    'MEX3A',
    'ESM1',
    'FOXH1',
    'ACAN',
    'HOXC9',
    'MFI2',
    'AF279780',
    'HOXC8',
    'LOC399815',
    'GABRD',
    'AK024736',
    'SALL4',
    'HOTAIR',
    'OLR1',
    'IBSP',
    'MAPK15',
    'ACBD7',
    'MATN3',
    'BC094703',
    'HOXC10',
    'STRA6',
    'FOXS1',
    'RAET1K',
    'TDRD5',
    'DCLK3',
    'LOC386597',
    'HOXA11',
    'HMGA2',
    'L12234',
    'AK022914',
    'CORIN',
    'PRAME',
    'CILP2',
    'TMEM26',
    'FAM132B',
    'LOC170425',
    'GAD1',
    'AK128707',
    'CHRNA1',
    'STK31',
    'BC035769',
    'TNNI3',
    'LOC286467',
    'CXorf61',
    'C6orf223',
    'ERI1',
    'LOC154860',
    'C8orf31',
    'FAM40B',
    'FLJ41200',
    'DMBX1',
    'MIR196B',
    'DCSTAMP',
    'HTRA4',
    'FEZF1',
    'LOC100287314',
    'AMH',
    'PRKCG',
    'C4BPA',
  ];
  const maxLen = Math.max(...top94Genes.map((el) => el.length));
  const fixedLen = `${Math.trunc(maxLen / 1.3)}rem`;
</script>

<ol style="--max-tag-length: {fixedLen}">
  {#each top94Genes as gene}
    <li class="leading-loose">{gene}</li>
  {/each}
</ol>

<style>
  ol {
    list-style-type: decimal-leading-zero;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    list-style-position: inside;
  }
  ol li {
    display: list-item;
    width: var(--max-tag-length);
  }
</style>
