<script lang="ts">
  import { onMount } from 'svelte';
  import { default as vegaEmbed } from 'vega-embed';

  const raw: Record<string, string[]> = [
    ['MTBP'],
    ['KIF14', 'HSPD1', 'CTHRC1', 'PABPC1L', 'C4BPA', 'MFI2'],
    ['DSCC1'],
    ['FAM72A'],
    ['CTHRC1', 'KIF14'],
    ['WDR67'],
    ['FAM72D'],
    ['CCDC150'],
    ['C1QTNF6'],
    ['MCM8'],
    ['ZNF695'],
    ['MMP11', 'ACAN', 'HSPD1'],
    ['XRCC2'],
    ['C5orf34'],
    ['AURKAPS1'],
    ['COL10A1'],
    ['PABPC1L', 'KIF14'],
    ['FANCB'],
    ['HSPD1', 'KIF14', 'PRKCG', 'MMP11'],
    ['CST1'],
    ['DNMT3B', 'TNNI3'],
    ['COL11A1', 'ADAM12'],
    ['WNT2'],
    ['ZNF761'],
    ['MTL5'],
    ['RNFT2'],
    ['ZNF469'],
    ['ADAM12', 'OLR1', 'COL11A1', 'ESM1'],
    ['NT5DC4'],
    ['FAM176A'],
    ['FAM122B'],
    ['ADAMTS14'],
    ['KIF26B'],
    ['HOXC11'],
    ['AX746880'],
    ['MEX3A'],
    ['ESM1', 'ADAM12'],
    ['FOXH1'],
    ['ACAN', 'MMP11'],
    ['HOXC9', 'MIR196B'],
    ['MFI2', 'KIF14'],
    ['AF279780'],
    ['HOXC8'],
    ['LOC399815'],
    ['GABRD'],
    ['AK024736'],
    ['SALL4'],
    ['HOTAIR'],
    ['OLR1', 'ADM12', 'STRA6'],
    ['IBSP'],
    ['MAPK15'],
    ['ACBD7'],
    ['MATN3'],
    ['BC094703'],
    ['HOXC10'],
    ['STRA6', 'OLR1'],
    ['FOXS1'],
    ['RAET1K'],
    ['TDRD5'],
    ['DCLK3'],
    ['LOC386597'],
    ['HOXA11'],
    ['HMGA2', 'MIR196B'],
    ['L12234'],
    ['AK022914'],
    ['CORIN'],
    ['PRAME'],
    ['CILP2'],
    ['TMEM26'],
    ['FAM132B'],
    ['LOC170425'],
    ['GAD1'],
    ['AK128707'],
    ['CHRNA1'],
    ['STK31'],
    ['BC035769'],
    ['TNNI3', 'DNMT3B'],
    ['LOC286467'],
    ['CXorf61'],
    ['C6orf223'],
    ['ERI1'],
    ['LOC154860'],
    ['C8orf31'],
    ['FAM40B'],
    ['FLJ41200'],
    ['DMBX1'],
    ['MIR196B', 'HOXC9', 'HMGA2'],
    ['DCSTAMP'],
    ['HTRA4'],
    ['FEZF1'],
    ['LOC100287314'],
    ['AMH'],
    ['PRKCG', 'HSPD1'],
    ['C4BPA', 'KIF14'],
  ].reduce((prev, [parent, ...others]) => ({ ...prev, [parent]: others }), {});
  const geneKeys = Object.keys(raw).map((name, idx) => ({
    name,
    id: idx + 2,
    parent: 1,
  }));
  geneKeys.unshift({ name: 'root', id: 1, parent: null });

  const subGeneKeys = Object.entries(raw)
    .map(([mainGene, genes]) =>
      genes
        .filter((e) => geneKeys.find((el) => el.name == e))
        .map((name) => ({
          source: geneKeys.find((el) => el.name === mainGene).id,
          target: geneKeys.find((el) => el.name == name).id,
        }))
    )
    .flat();

  export let id: string;
  export let title: string;

  const genedata = {
    $schema: 'https://vega.github.io/schema/vega/v5.json',
    description:
      'A network diagram of software dependencies, with edges grouped via hierarchical edge bundling.',
    padding: 5,
    width: 720,
    height: 720,
    autosize: 'none',
    title,

    signals: [
      {
        name: 'tension',
        value: 0.85,
      },
      {
        name: 'radius',
        value: 280,
      },
      {
        name: 'extent',
        value: 360,
      },
      {
        name: 'rotate',
        value: 0,
      },
      {
        name: 'textSize',
        value: 8,
      },
      {
        name: 'textOffset',
        value: 2,
      },
      {
        name: 'layout',
        value: 'cluster',
      },
      { name: 'colorIn', value: 'firebrick' },
      { name: 'colorOut', value: 'forestgreen' },
      { name: 'originX', update: 'width / 2' },
      { name: 'originY', update: 'height / 2' },
      {
        name: 'active',
        value: null,
        on: [
          { events: 'text:mouseover', update: 'datum.id' },
          { events: 'mouseover[!event.item]', update: 'null' },
        ],
      },
    ],

    data: [
      {
        name: 'tree',
        values: geneKeys,
        transform: [
          {
            type: 'stratify',
            key: 'id',
            parentKey: 'parent',
          },
          {
            type: 'tree',
            method: { signal: 'layout' },
            size: [1, 1],
            as: ['alpha', 'beta', 'depth', 'children'],
          },
          {
            type: 'formula',
            expr: '(rotate + extent * datum.alpha + 270) % 360',
            as: 'angle',
          },
          {
            type: 'formula',
            expr: 'inrange(datum.angle, [90, 270])',
            as: 'leftside',
          },
          {
            type: 'formula',
            expr: 'originX + radius * datum.beta * cos(PI * datum.angle / 180)',
            as: 'x',
          },
          {
            type: 'formula',
            expr: 'originY + radius * datum.beta * sin(PI * datum.angle / 180)',
            as: 'y',
          },
        ],
      },
      {
        name: 'leaves',
        source: 'tree',
        transform: [
          {
            type: 'filter',
            expr: '!datum.children',
          },
        ],
      },
      {
        name: 'dependencies',
        values: subGeneKeys,
        transform: [
          {
            type: 'formula',
            expr: "treePath('tree', datum.source, datum.target)",
            as: 'treepath',
            initonly: true,
          },
        ],
      },
      {
        name: 'selected',
        source: 'dependencies',
        transform: [
          {
            type: 'filter',
            expr: 'datum.source === active || datum.target === active',
          },
        ],
      },
    ],

    marks: [
      {
        type: 'text',
        from: { data: 'leaves' },
        encode: {
          enter: {
            text: { field: 'name' },
            baseline: { value: 'middle' },
          },
          update: {
            x: { field: 'x' },
            y: { field: 'y' },
            dx: { signal: 'textOffset * (datum.leftside ? -1 : 1)' },
            angle: {
              signal: 'datum.leftside ? datum.angle - 180 : datum.angle',
            },
            align: { signal: "datum.leftside ? 'right' : 'left'" },
            fontSize: { signal: 'textSize' },
            fontWeight: [
              { test: "indata('selected', 'source', datum.id)", value: 'bold' },
              { test: "indata('selected', 'target', datum.id)", value: 'bold' },
              { value: null },
            ],
            fill: [
              { test: 'datum.id === active', value: 'black' },
              {
                test: "indata('selected', 'source', datum.id)",
                signal: 'colorIn',
              },
              {
                test: "indata('selected', 'target', datum.id)",
                signal: 'colorOut',
              },
              { value: 'black' },
            ],
          },
        },
      },
      {
        type: 'group',
        from: {
          facet: {
            name: 'path',
            data: 'dependencies',
            field: 'treepath',
          },
        },
        marks: [
          {
            type: 'line',
            interactive: false,
            from: { data: 'path' },
            encode: {
              enter: {
                interpolate: { value: 'bundle' },
                strokeWidth: { value: 1.5 },
              },
              update: {
                stroke: [
                  { test: 'parent.source === active', signal: 'colorOut' },
                  { test: 'parent.target === active', signal: 'colorIn' },
                  { value: 'steelblue' },
                ],
                strokeOpacity: [
                  {
                    test:
                      'parent.source === active || parent.target === active',
                    value: 1,
                  },
                  { value: 0.2 },
                ],
                tension: { signal: 'tension' },
                x: { field: 'x' },
                y: { field: 'y' },
              },
            },
          },
        ],
      },
    ],

    scales: [
      {
        name: 'color',
        type: 'ordinal',
        domain: ['interact with', 'interact from'],
        range: [{ signal: 'colorIn' }, { signal: 'colorOut' }],
      },
    ],

    legends: [
      {
        stroke: 'color',
        orient: 'bottom-right',
        title: 'Dependencies',
        symbolType: 'stroke',
      },
    ],
  };

  onMount(() => {
    vegaEmbed(`#${id}`, genedata).catch((error) => console.log(error));
  });
</script>

<div {id} />
