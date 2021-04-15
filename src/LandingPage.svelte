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
    <p>
      Gastric cancer (GC) has the 5th incidence rate among cancers and is the
      3rd leading cause of cancer death worldwide.
    </p>
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
    <p>Eastern Asia has the highest incidence rate of GC around the world.</p>
    <Ppyramids id="ga-data-in-region" />
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
    <img src="images/p2_2.png" alt="" />
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
