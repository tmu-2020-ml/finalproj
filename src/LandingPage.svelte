<script lang="ts">
  import DecreasedGeneTable from './parts/decreased_genes_table.svelte';
  import IncreasedGeneTable from './parts/increased_genes_table.svelte';
  import TCGASampleTable from './parts/stad_sample.svelte';
  import DonutPie from './parts/donutpie.svelte';
  import Ppyramids from './parts/ppyramids.svelte';
  import GeneInteraction from './parts/gene_interactions.svelte';

  const GAIncidenceData: [string, number][] = [
    ['lung', 11.6],
    ['breast', 11.6],
    ['colorectum', 10.2],
    ['prostate', 7.1],
    ['stomach', 5.7],
    ['liver', 4.7],
    ['esophagus', 3.2],
    ['cervix uteri', 3.2],
    ['thyroid', 3.1],
    ['bladder', 3],
    ['other', 36.6],
  ];

  const GAMortality: [string, number][] = [
    ['lung', 18.4],
    ['breast', 6.6],
    ['colorectum', 9.2],
    ['prostate', 3.8],
    ['stomach', 8.2],
    ['liver', 8.2],
    ['esophagus', 5.3],
    ['pancreas', 4.5],
    ['cervix uteri', 3.3],
    ['leukaemia', 3.2],
    ['other', 29.3],
  ];

  const pca_genes = [
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
</script>

<svelte:head>
  <base target="_blank" />
</svelte:head>

<header class="container mx-auto">
  <h1 class="text-6xl">
    Identification of potential gastric cancer biomarkers
  </h1>
  <h2 class="text-4xl">using TCGA-based cancer prediction model</h2>
</header>

<main class="container mx-auto">
  <section>
    <h3 class="text-4xl">Motivation</h3>
    <figure>
      <figcaption>
        Gastric cancer (GC) has the 5th incidence rate among cancers and is the
        3rd leading cause of cancer death worldwide.
      </figcaption>
      <DonutPie
        title="Incidence rate in both sexes"
        id="ga-incidence"
        data={GAIncidenceData}
      />
      <DonutPie
        title="Mortality rate in both sexes"
        id="ga-morality"
        data={GAMortality}
      />
    </figure>

    <figure>
      <figcaption>
        Eastern Asia has the highest incidence rate of GC around the world.
      </figcaption>
      <Ppyramids id="ga-data-in-region" />
    </figure>
    <div>
      <cite>CA Cancer J Clin. 2018 Nov;68(6):394-424.</cite>
    </div>

    <figure>
      <figcaption>The situation in Taiwan.</figcaption>
      <img src="images/age stand.svg" alt="" />
      <img src="images/age.svg" alt="" />
      <img src="images/no.svg" alt="" />
    </figure>
  </section>

  <section>
    <h3 class="text-2xl">Risk factors for the GC progression</h3>

    <ul class="list-disc list-inside">
      <li>Chromosome instability (CIN)/ gene dysregulation.</li>
      <li>Microsatellite instability (MSI).</li>
      <li>Metabolic disease, e.g. pernicious anemia, GERD.</li>
      <li>Low acidity.</li>
      <li>Blood type, esp. A type.</li>
    </ul>
    <img src="images/p2_1.png" alt="" />
    <img src="images/f1.large.jpg" alt="" />
    <cite>Clinical Microbiology Reviews 23, 713-739 (2010) </cite>
  </section>

  <section>
    <h3 class="text-4xl">TCGA Dataset</h3>
    <blockquote>
      <p>
        The Cancer Genome Atlas (TCGA), a collaboration between the National
        Cancer Institute (NCI) and National Human Genome Research Institute
        (NHGRI), has generated comprehensive, multi-dimensional maps of the key
        genomic changes in 33 types of cancer. The TCGA dataset, describing
        tumor tissue and matched normal tissues from more than 11,000 patients,
        is publically available and has been used widely by the research
        community. The data have contributed to more than a thousand studies of
        cancer by independent researchers and to the TCGA research network
        publications.
      </p>
      <cite>
        quoted from <a
          href="https://xenabrowser.net/datapages/?host=https%3A%2F%2Ftcga.xenahubs.net&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443"
          >UCSC
        </a></cite
      >
    </blockquote>
  </section>

  <section>
    <h3 class="text-4xl">STAD Dataset</h3>
    <blockquote>
      <p>
        TCGA stomach adenocarcinoma (STAD) gene expression by RNAseq (polyA+
        IlluminaHiSeq BC).
      </p>
      <p>
        The gene expression profile was measured experimentally using the
        Illumina HiSeq 2000 RNA Sequencing platform by the British Columbia
        Cancer Agency TCGA genome characterization center. Level 3 data was
        downloaded from TCGA data coordination center. This dataset shows the
        gene-level transcription estimates, as in RPKM values (Reads Per
        Kilobase of exon model per Million mapped reads). Genes are mapped onto
        the human genome coordinates using UCSC Xena HUGO probeMap (see ID/Gene
        mapping link below for details).
      </p>
      <cite
        >quoted from <a
          href="https://xenabrowser.net/datapages/?dataset=TCGA.STAD.sampleMap%2FHiSeq&host=https%3A%2F%2Ftcga.xenahubs.net&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443"
          >dataset: gene expression RNAseq - IlluminaHiSeq BC</a
        ></cite
      >
    </blockquote>

    <TCGASampleTable />
  </section>

  <section>
    <h3 class="text-4xl">Inspiration</h3>
    <blockquote>
      <p>
        ... We evidenced a gene expression signature associated to muscle
        contraction-related genes in specimens obtained from OSCC patients with
        lymph node involvement. This gene signature suggests the presence of
        myofibroblasts in tumor stoma of patients with lymph node involvement
        and emphasizes the decisive role played by myofibroblasts probably
        through their secretome in determining OSCC invasiveness.
      </p>
      <cite
        >quoted from <a href="https://www.oncotarget.com/article/20645/text/"
          >A primary tumor gene expression signature identifies a crucial role
          played by tumor stroma myofibroblasts in lymph node involvement in
          oral squamous cell carcinoma</a
        ></cite
      >
    </blockquote>

    <article>
      <p>
        From the paper, it found out 41 differentially expressed expressed genes
        which fold change greater than 2 and p-value less than 0.05.
      </p>

      <div class="flex justify-around">
        <div class="flex-1">
          <IncreasedGeneTable />
        </div>
        <div class="flex-1">
          <DecreasedGeneTable />
        </div>
      </div>
    </article>

    <article>
      <p>
        The PCA plot shows two distinct clusters: OSCC with and without lymph
        node involvement (N+ and N-) in this paper.
      </p>

      <img src="images/p3_1.jpg" alt="" />
    </article>
  </section>

  <section>
    <h3 class="text-4xl">Our Strategy Map</h3>
    <ol class="list-disc list-inside">
      <li>Preprocessing the raw data.</li>
      <li>Reducing variables by Student's t-test</li>
      <li>
        Differentiating GC/normal with the accuracy score by Naïve Bays model.
      </li>
      <li>Finding Clinical relevance with OR and AUC analysis.</li>
    </ol>
  </section>

  <section>
    <h3 class="text-4xl">Step by step</h3>
    <section>
      <h4 class="text-3xl">Preprocessing the raw data</h4>
      <figure>
        <img src="/images/rawdata.png" />
      </figure>
    </section>
    <section>
      <h4 class="text-3xl">Reducing variables by Student's t-test</h4>
    </section>
    <section>
      <h4 class="text-3xl">
        Differentiating GC/normal with the accuracy score by Naïve Bays model
      </h4>
      <figure>
        <img src="/images/nbperf.png" />
      </figure>
    </section>
    <section>
      <h4 class="text-3xl">
        Finding Clinical relevance with OR and AUC analysis
      </h4>
      <figure>
        <figcaption>30 PC can explain 80% variance of the data</figcaption>

        <img src="/images/80 variance.svg" />
        <img src="/images/error vs. pc.svg" />
      </figure>
      <figure>
        <figcaption>94 genes ranking</figcaption>
        <div>
          <ol>
            {#each pca_genes as gene}
              <li style="display: inline-block;">{gene}</li>
            {/each}
          </ol>
        </div>
      </figure>
      <figure>
        <figcaption>The rationale to evaluate error score</figcaption>
        <div>
          <table>
            <tr>
              <td>False Negative</td>
              <td>Corrected Decision</td>
            </tr>
            <tr>
              <td>Corrected Decision</td>
              <td>Flase Positive</td>
            </tr>
          </table>

          <div>
            <div>False negative error is much serious</div>
            <div>Wα = 10 Wβ</div>
            <div>Error = Wα (# of α error) + Wβ (# of β error)</div>
          </div>

          <table>
            <tr>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <td>0</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </figure>
      <figure>
        <figcaption>
          top 2 genes are enough to lower the error rate to near 20%
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          MTBP and KIF14 are enough to lower the error score to near 20%.
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          MTBP and KIF14 shows two distinct clusters: GC vs. non-GC
        </figcaption>
        <img src="/images/scatterplot.png" />
      </figure>
      <figure>
        <figcaption>
          <p>Effects of MTBP and KIF14 expression on OR for GC development</p>
          <p>
            是否罹癌為依變數，兩個基因MTBP、KIF14為自變數(連續變數)，以邏輯斯回歸算出MTBP、KIF14的OR勝算比、P值。
          </p>
          <p>MTBP每增加一單位則增加罹癌率437倍</p>
          <p>KIF14每增加一單位則增加罹癌率17倍</p>
        </figcaption>

        <table>
          <thead>
            <tr>
              <th class="border" />
              <th class="border">OR(95CI)</th>
              <th class="border">p-value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border">MTBP</td>
              <td class="border">437.8 (12.652, &gt;999.9)</td>
              <td class="border">0.0008 ****</td>
            </tr>
            <tr>
              <td class="border">KIF14</td>
              <td class="border">18.477 (1.987, 171.795)</td>
              <td class="border">0.0104 *</td>
            </tr>
            <tr>
              <td class="border">MTBP+KIF14</td>
              <td class="border">2408.64</td>
              <td class="border">&lt;0.00001 ****</td>
            </tr>
          </tbody>
        </table>

        <figure>
          <figcaption>KIF14 (cutoff≈0.75)</figcaption>
          <img src="/images/kif14_roc.svg" />
        </figure>
        <figure>
          <figcaption>MTBP (cutoff≈0.79)</figcaption>
          <img src="/images/mtbp_roc.svg" />
        </figure>

        <table>
          <thead>
            <tr>
              <th colspan="2" rowspan="2" class="border"
                >MTBP<br />Sensitivity: 340 / 380 = 0.8947<br />Specificity: 37
                / 37 = 1</th
              >
              <th class="border" colspan="2">Prediction</th>
            </tr>
            <tr>
              <td class="border">&gt;= 0.79</td>
              <td class="border">&lt; 0.79</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">Actual</td>
              <td class="border">GC is 1 (380)</td>
              <td class="border">340</td>
              <td class="border">40</td>
            </tr>
            <tr>
              <td class="border">GC is 0 (37)</td>
              <td class="border">0</td>
              <td class="border">37</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th colspan="2" rowspan="2" class="border"
                >KIF14<br />Sensitivity: 340 / 380 = 0.8947<br />Specificity: 35
                / 37 = 0.9459</th
              >
              <th colspan="2" class="border">Prediction</th>
            </tr>
            <tr>
              <td class="border">&gt;= 0.75</td>
              <td class="border">&lt; 0.75</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border" rowspan="2">Actual</td>
              <td class="border">GC is 1 (380)</td>
              <td class="border">340</td>
              <td class="border">40</td>
            </tr>
            <tr>
              <td class="border">GC is 0 (37)</td>
              <td class="border">2</td>
              <td class="border">35</td>
            </tr>
          </tbody>
        </table>

        <figure>
          <figcaption>Combined ROC (cutoff≈0.95)</figcaption>
          <img src="/images/combined_roc.svg" />
        </figure>
      </figure>
    </section>
  </section>

  <section>
    <h3 class="text-4xl">The Interaction between genes</h3>
    <GeneInteraction id="gene-interaction" title="test" />
  </section>

  <section>
    <h3 class="text-4xl">
      Curated survival data from the Pan-cancer Atlas paper titled
    </h3>
    <p>
      "An Integrated TCGA Pan-Cancer Clinical Data Resource (TCGA-CDR) to drive
      high quality survival outcome analytics". The paper highlights four types
      of carefully curated survival endpoints, and recommends the use of the
      endpoints of OS, PFI, DFI, and DSS for each TCGA cancer type.
    </p>
  </section>
  <section>
    <h3 class="text-4xl">Survival Analysis</h3>

    <p>
      We use survival analysis and show the OS, PFI, DFI Kaplan-Meier (K-M)
      plots for all cases of Stomach Cancer (STAD) cancer.
    </p>
    <p>
      The MTBP and KIF14 are divided into two groups, which stratified by ROC
      cut points.
    </p>

    <dl>
      <dt>Overall survival (OS)</dt>
      <dd>
        It is an important endpoint, with the advantage that there is minimal
        ambiguity in defining an OS event
      </dd>

      <dt>Disease-specific survival (DSS)</dt>
      <dd>
        Patients who died from causes other than the disease being studied are
        not counted in this measurement
      </dd>
      <dt>Disease-free interval (DFI)</dt>
      <dd>
        It is the length of time during and after the treatment of a disease It
        means that a patient stays free of a cancer after a particular treatment
      </dd>
    </dl>
  </section>

  <section>
    <h3 class="text-4xl">Conclusion</h3>
    <ol class="list-disc list-inside">
      <li>
        Using ML classification model and PCA, we have identified MTBP and KIF14
        as 2 candidates of potential GC biomarkers.
      </li>
      <li>
        Published papers have shown that MTBP and KIF14 as two potential GC
        prognostic markers .
      </li>
      <li>
        Further studies are required to validate the biological and clinical
        importance of MTBP and KIF14 in GC development.
      </li>
    </ol>
  </section>

  <section>
    <h3 class="text-4xl">Contact & Responsibilities</h3>

    <h4>names in alphabetical order</h4>

    <ul class="flex">
      <li class="flex-1">
        <address>Chen Chi Ya</address>
        <ul class="list-disc list-inside">
          <li>Clinical statistics</li>
        </ul>
      </li>

      <li class="flex-1">
        <address>Chen Yan Jin</address>
        <ul class="list-disc list-inside">
          <li>Data preprocessing using R.</li>
          <li>
            Calculation of Chi-square test, OR, 95% CI and p-value using SAS.
          </li>
          <li>Cluster plot for MTBP, KIF14 using R</li>
        </ul>
      </li>

      <li class="flex-1">
        <address>Huang Bo Shih</address>
        <ul class="list-disc list-inside">
          <li>PCA analysis.</li>
          <li>Project organization.</li>
        </ul>
      </li>

      <li class="flex-1">
        <address>Su Jing Jhong</address>
        <ul class="list-disc list-inside">
          <li>Data processing and ML classification model implementation.</li>
          <li>Setup and design the website.</li>
        </ul>
      </li>

      <li class="flex-1">
        <address>Tsao Yen Ping</address>
        <ul class="list-disc list-inside">
          <li>ROC chart for MTBP, KIF14 using R.</li>
          <li>
            Contingency table, calculation of sensitivity, specificity and AUC
            for MTBP, KIF14 and combined genes
          </li>
        </ul>
      </li>
    </ul>
  </section>

  <img src="./loading.svg" alt="loading" />
</main>
