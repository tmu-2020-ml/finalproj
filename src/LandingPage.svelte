<script lang="ts">
  import DecreasedGeneTable from './parts/decreased_genes_table.svelte';
  import IncreasedGeneTable from './parts/increased_genes_table.svelte';
  import TCGASampleTable from './parts/stad_sample.svelte';
  import DonutPie from './parts/donutpie.svelte';
  import Ppyramids from './parts/ppyramids.svelte';

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

        <img src="/images/pca.png" />
        <img src="/images/pca_plot.png" />
      </figure>
      <figure>
        <figcaption>94 genes ranking</figcaption>
        <img src="/images/pca_top2.png" />
      </figure>
      <figure>
        <figcaption>The rationale to evaluate error score</figcaption>
        <img src="/images/pca_explain.png" />
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

        <img src="/images/kif14_roc.png" />
        <img src="/images/mtbp_roc.png" />

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

        <img src="/images/combined_roc.png" />
      </figure>
    </section>
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
