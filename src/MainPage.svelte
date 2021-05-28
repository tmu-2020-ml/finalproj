<script lang="ts">
  import TCGASampleTable from './parts/stad_sample.svelte';
  import DonutPie from './parts/donutpie.svelte';
  import Ppyramids from './parts/ppyramids.svelte';
  import GeneInteraction from './parts/gene_interactions.svelte';
  import GenesRanking from './sections/genes_ranking.svelte';
  import Blockquote from './parts/blockquote.svelte';
  import StatTable from './parts/stat_table.svelte';
  import ContactSection from './sections/contact.svelte';
  import GenesPvalue from './parts/genes_pvalue.svelte';
  import GeneSummary from './parts/gene_summary.svelte';
  import GeneShowcase from './sections/genes_showcase.svelte';

  $: inputPValue = 1e-38;

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

<header class="font-serif p-20 xl:p-40 bg-secondary text-danger">
  <div class="flex flex-wrap sm:flex-nowrap">
    <h1 class="text-5xl xl:text-8xl">
      Identification of Potential Gastric Cancer Biomarkers
    </h1>
    <div class="flex-shrink-0 order-first sm:order-none">
      <img src="/images/urlqr.svg" alt="" />
    </div>
  </div>
  <h6 class="text-4xl">using TCGA-based cancer prediction model</h6>
</header>

<section class="flex flex-col font-serif p-10">
  <h3 id="motivation" class="text-4xl p-10">Motivation</h3>
  <section class="container mx-auto">
    <figure class="flex flex-col">
      <figcaption class="p-5">
        Gastric cancer (GC) has the 5th incidence rate among cancers and is the
        3rd leading cause of cancer death worldwide.
        <cite class="text-xs">CA Cancer J Clin. 2018 Nov;68(6):394-424.</cite>
      </figcaption>
      <div class="flex flex-row justify-center">
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
      </div>
    </figure>

    <figure class="flex flex-col">
      <figcaption class="p-5">
        Eastern Asia has the highest incidence rate of GC around the world.
        <cite class="text-xs">CA Cancer J Clin. 2018 Nov;68(6):394-424.</cite>
      </figcaption>
      <div class="flex justify-center">
        <Ppyramids id="ga-data-in-region" />
      </div>
    </figure>

    <figure class="flex flex-col p-5">
      <figcaption>The following plots are the situations in Taiwan.</figcaption>
      <div class="flex flex-wrap xl:flex-nowrap">
        <span>
          <img src="/images/age stand.svg" alt="" />
        </span>
        <span>
          <img src="/images/age.svg" alt="" />
        </span>
        <span>
          <img src="/images/no.svg" alt="" />
        </span>
      </div>
    </figure>
  </section>
</section>

<section class="flex flex-col font-serif bg-primary p-10">
  <h3 id="risk-factors" class="text-4xl p-10">Risk factors</h3>

  <section class="container mx-auto">
    <Blockquote>
      <slot slot="content">
        <h4 class="text-3xl">The risk factors for the GC progression</h4>
        <ul class="list-disc list-inside text-2xl">
          <li class="leading-loose">
            Chromosome instability (CIN)/ gene dysregulation.
          </li>
          <li class="leading-loose">Microsatellite instability (MSI).</li>
          <li class="leading-loose">
            Metabolic disease, e.g. pernicious anemia, GERD.
          </li>
          <li class="leading-loose">Low acidity.</li>
          <li class="leading-loose">Blood type, esp. A type.</li>
        </ul>
      </slot>
      <slot slot="cite">
        quoted from Clinical Microbiology Reviews 23, 713-739 (2010)
      </slot>
    </Blockquote>

    <!-- <div class="flex">
      <img src="/images/p2_1.png" alt="" />
      <img src="/images/f1.large.jpg" alt="" />
    </div> -->
  </section>
</section>

<section class="font-serif p-10">
  <h3 id="risk-factors" class="text-4xl p-10">Dataset</h3>

  <section class="container mx-auto">
    <article>
      <h4 class="text-3xl">TCGA</h4>

      <Blockquote>
        <slot slot="content">
          <p>
            The Cancer Genome Atlas (TCGA), a collaboration between the National
            Cancer Institute (NCI) and National Human Genome Research Institute
            (NHGRI), has generated comprehensive, multi-dimensional maps of the
            key genomic changes in 33 types of cancer. The TCGA dataset,
            describing tumor tissue and matched normal tissues from more than
            11,000 patients, is publically available and has been used widely by
            the research community. The data have contributed to more than a
            thousand studies of cancer by independent researchers and to the
            TCGA research network publications.
          </p>
        </slot>
        <slot slot="cite">
          quoted from <a
            href="https://xenabrowser.net/datapages/?host=https%3A%2F%2Ftcga.xenahubs.net&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443"
            >UCSC
          </a>
        </slot>
      </Blockquote>
    </article>
    <article>
      <h4 class="text-3xl">STAD</h4>

      <Blockquote>
        <slot slot="content">
          <p>
            TCGA stomach adenocarcinoma (STAD) gene expression by RNAseq (polyA+
            IlluminaHiSeq BC).
          </p>
          <p>
            The gene expression profile was measured experimentally using the
            Illumina HiSeq 2000 RNA Sequencing platform by the British Columbia
            Cancer Agency TCGA genome characterization center. Level 3 data was
            downloaded from TCGA data coordination center. This dataset shows
            the gene-level transcription estimates, as in RPKM values (Reads Per
            Kilobase of exon model per Million mapped reads). Genes are mapped
            onto the human genome coordinates using UCSC Xena HUGO probeMap (see
            ID/Gene mapping link below for details).
          </p>
        </slot>
        <slot slot="cite">
          quoted from <a
            href="https://xenabrowser.net/datapages/?dataset=TCGA.STAD.sampleMap%2FHiSeq&host=https%3A%2F%2Ftcga.xenahubs.net&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443"
            >dataset: gene expression RNAseq - IlluminaHiSeq BC</a
          >
        </slot>
      </Blockquote>
    </article>

    <div class="overflow-x-auto flex justify-center">
      <StatTable>
        <TCGASampleTable />
      </StatTable>
    </div>
  </section>
</section>

<section class="flex flex-col font-serif bg-primary p-10">
  <h3 id="inspiration" class="text-4xl p-10">Inspiration</h3>

  <section class="container mx-auto">
    <Blockquote>
      <slot slot="content">
        <p>
          We evidenced a gene expression signature associated to muscle
          contraction-related genes in specimens obtained from OSCC patients
          with lymph node involvement. This gene signature suggests the presence
          of myofibroblasts in tumor stoma of patients with lymph node
          involvement and emphasizes the decisive role played by myofibroblasts
          probably through their secretome in determining OSCC invasiveness.
        </p>
      </slot>
      <slot slot="cite">
        quoted from <a href="https://www.oncotarget.com/article/20645/text/"
          >A primary tumor gene expression signature identifies a crucial role
          played by tumor stroma myofibroblasts in lymph node involvement in
          oral squamous cell carcinoma</a
        >
      </slot>
    </Blockquote>

    <p class="p-5">
      As shown in table 1 in the paper, 41 genes were found significantly
      expressed by 2-fold between tumor tissues of OSCC patients with and
      without lymph node involvement (N+ and N-). PCA plot showed 2 distinct
      clusters.
    </p>
  </section>
</section>

<section class="flex flex-col font-serif bg-secondary text-danger p-10">
  <h3 id="strategy-map" class="text-4xl p-10">Our Strategy Map</h3>

  <section class="container mx-auto">
    <ol class="list-disc list-inside text-2xl">
      <!-- <li>Preprocessing the raw data.</li> -->
      <li class="leading-loose">Reducing variables by Student's t-test.</li>
      <li class="leading-loose">
        Differentiating GC/normal with the accuracy score by Naïve Bays model.
      </li>
      <li class="leading-loose">
        Finding Clinical relevance with OR and AUC analysis.
      </li>
    </ol>
  </section>
</section>

<section class="flex flex-col font-serif p-10">
  <h3 id="classification" class="text-4xl p-10">Classification</h3>
  <section class="container mx-auto">
    <article>
      <h4 class="text-3xl capitalize">Data Preprocessing</h4>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          The dataset includes 417 observations within 380 GC and 37 normal
          cases. Each row shows the gene-level transcription estimates, which
          contain 26,514 genes, in RPKM values.
        </figcaption>
        <!-- <ul>
          <li>tt</li>
        </ul> -->
      </figure>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          Its original form is hard to processes in machine learning. The
          dataset needs to be relabeled and rotated into an appropriate form.
        </figcaption>
        <!-- <ul>
          <li>tt</li>
        </ul> -->
      </figure>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          The following plots are the distribution plots for some genes and some
          of them could be found to present in the normal distribution.
        </figcaption>
        <GeneShowcase />
      </figure>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          Reducing variables to an appropriate scale by using Student's t-test.
        </figcaption>

        <div class="p-5">
          p-value should be smaller than
          <input
            class="border p-3 w-20"
            type="string"
            bind:value={inputPValue}
          />
        </div>

        <GenesPvalue id="gene-pvalue" bind:lessthan={inputPValue} />
      </figure>
    </article>

    <article>
      <h4 class="text-3xl capitalize">Naïve Bays model</h4>

      <figure>
        <figcaption class="p-5">
          The model shows the best performance in p-value &lt; 1e-38 which
          reduce the number of genes into 94.
        </figcaption>
        <div class="flex justify-center">
          <img
            class="max-w-screen-sm"
            src="/images/nbperf.svg"
            alt="the performance of Naïve Bays model"
          />
        </div>
      </figure>
    </article>

    <article>
      <h4 class="text-3xl capitalize">Principal components analysis</h4>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          30 PC can explain 80% variance of the data. And PC1 plus PC2 can
          distinguish two distinct clusters: GC vs. non-GC.
        </figcaption>
        <div
          class="flex flex-wrap xl:flex-nowrap overflow-x-auto relative justify-evenly"
          style="width: 100vw; left: calc(-50vw + 50%);"
        >
          <img src="/images/80 variance.svg" />
          <img src="/images/clustering usung PC1+PC2.svg" />
        </div>
      </figure>

      <figure class="flex flex-col">
        <figcaption class="p-5">The ranking of 94 genes.</figcaption>
        <div class="flex justify-center">
          <GenesRanking />
        </div>
      </figure>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          <p>
            Top 2 genes are enough to lower the error rate to near 20%. MTBP and
            KIF14 are enough to lower the error score to near 20%.
          </p>
          <p>MTBP and KIF14 shows two distinct clusters: GC vs. non-GC.</p>
        </figcaption>
        <div
          class="flex flex-wrap xl:flex-nowrap overflow-x-auto relative justify-evenly"
          style="width: 100vw; left: calc(-50vw + 50%);"
        >
          <img src="/images/error vs. pc.svg" />
          <img src="/images/variance vs. PC.svg" />
          <img src="/images/mtbp_kif14_scatterplot.svg" />
        </div>
      </figure>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          <p>
            Using carcinogenesis (1,0) as dependent variable and expression
            levels of MTBP and KIF14 as independent variables, we calculated the
            OR by logistic regression. The OR of tissue carcinogenesis in each
            unit increase of MTBP and KIF14 expression levels are 437 and 17,
            respectively.
          </p>
        </figcaption>
        <StatTable classnames="flex justify-center">
          <table>
            <!-- <caption
              >Effects of MTBP and KIF14 expression on OR for GC development.</caption
            > -->
            <thead>
              <tr>
                <th />
                <th>OR(95CI)</th>
                <th>p-value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>MTBP</th>
                <td class="pl-1">437.8 (12.652, &gt;999.9)</td>
                <td class="pl-1">0.0008 ****</td>
              </tr>
              <tr>
                <th>KIF14</th>
                <td class="pl-1">18.477 (1.987, 171.795)</td>
                <td class="pl-1">0.0104 *</td>
              </tr>
              <tr>
                <th>MTBP+KIF14</th>
                <td class="pl-1">2408.64</td>
                <td class="pl-1">&lt;0.00001 ****</td>
              </tr>
            </tbody>
          </table>
        </StatTable>
      </figure>

      <div class="flex justify-evenly p-5">
        <figure>
          <figcaption>MTBP (cutoff≈0.79)</figcaption>
          <img src="/images/mtbp_roc.svg" />
        </figure>
        <figure>
          <figcaption>KIF14 (cutoff≈0.75)</figcaption>
          <img src="/images/kif14_roc.svg" />
        </figure>
      </div>

      <div class="flex justify-evenly p-5">
        <StatTable>
          <table>
            <thead>
              <tr>
                <th colspan="2" rowspan="2"
                  >MTBP<br />Sensitivity: 340 / 380 = 0.8947<br />Specificity:
                  37 / 37 = 1</th
                >
                <th colspan="2">Prediction</th>
              </tr>
              <tr>
                <td>&gt;= 0.79</td>
                <td>&lt; 0.79</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2">Actual</th>
                <td>GC is 1 (380)</td>
                <td>340</td>
                <td>40</td>
              </tr>
              <tr>
                <td>GC is 0 (37)</td>
                <td>0</td>
                <td>37</td>
              </tr>
            </tbody>
          </table>
        </StatTable>

        <StatTable>
          <table>
            <thead>
              <tr>
                <th colspan="2" rowspan="2"
                  >KIF14<br />Sensitivity: 340 / 380 = 0.8947<br />Specificity:
                  35 / 37 = 0.9459</th
                >
                <th colspan="2">Prediction</th>
              </tr>
              <tr>
                <td>&gt;= 0.75</td>
                <td>&lt; 0.75</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowspan="2">Actual</th>
                <td>GC is 1 (380)</td>
                <td>340</td>
                <td>40</td>
              </tr>
              <tr>
                <td>GC is 0 (37)</td>
                <td>2</td>
                <td>35</td>
              </tr>
            </tbody>
          </table>
        </StatTable>
      </div>

      <figure class="flex flex-col">
        <figcaption class="p-5">
          <p>
            The area under ROC curve showed 0.969 to MTBP and KIF14 and 0.978
            for combination of two genes. It indicates that both genes have good
            ability to discriminate malignant tissues vs. normal counterparts.
          </p>
        </figcaption>
        <div
          class="flex flex-wrap xl:flex-nowrap overflow-x-auto relative justify-evenly items-center"
          style="width: 100vw; left: calc(-50vw + 50%);"
        >
          <figure>
            <figcaption>Combined ROC (cutoff≈0.95)</figcaption>
            <img src="/images/combined_roc.svg" />
          </figure>
          <StatTable>
            <table>
              <caption
                >Effects of MTBP and KIF14 expression on AUC for GC/normal
                tissues differentiation</caption
              >
              <thead
                ><tr
                  ><th /><th>Expression</th><th>GC</th><th>Normal</th><th
                    >Sensitivity</th
                  ><th>Specificity</th><th>AUC</th></tr
                ></thead
              ><tbody
                ><tr
                  ><th rowspan="2">MTBP</th><td>high</td><td>340</td><td>0</td
                  ><td rowspan="2">0.8947</td><td rowspan="2">1</td><td
                    rowspan="2">0.969</td
                  ></tr
                ><tr><td>low</td><td>40</td><td>37</td></tr><tr
                  ><th rowspan="2">KIF14</th><td>high</td><td>340</td><td>2</td
                  ><td rowspan="2">0.8947</td><td rowspan="2">0.9459</td><td
                    rowspan="2">0.969</td
                  ></tr
                ><tr><td>low</td><td>40</td><td>35</td></tr><tr
                  ><th rowspan="2">Combined 2 genes</th><td>high</td><td>327</td
                  ><td>0</td><td rowspan="2">0.8605</td><td rowspan="2">1</td
                  ><td rowspan="2">0.978</td></tr
                ><tr><td>low</td><td>53</td><td>37</td></tr></tbody
              >
            </table>
          </StatTable>
        </div>
      </figure>
    </article>
  </section>
</section>

<section class="flex flex-col font-serif p-10 bg-primary">
  <h3 class="text-4xl p-10">Clinical Relevance</h3>
  <section class="container mx-auto">
    <section class="container mx-auto">
      <article>
        <p>
          The expression levels of MTBP and KIF14 in gastric tumor tissues were
          divided into two groups by ROC cut points. The relevance of two genes
          to clinical features were assessed by chi square test.
        </p>
      </article>

      <div
        class="flex flex-wrap xl:flex-nowrap overflow-x-auto relative justify-center items-center p-5"
        style="width: 100vw; left: calc(-50vw + 50%);"
      >
        <StatTable>
          <table style="border-collapse:collapse;border-spacing:0" class="tg">
            <thead
              ><tr
                ><th rowspan="2" /><th>MTBP&lt;=0.79</th><th>MTBP&gt;0.79</th
                ><th rowspan="2">P-value</th><th>KIF14 &lt;=0.75</th><th
                  >KIF14 &gt;0.75</th
                ><th rowspan="2"> p-value</th></tr
              ><tr><td>N=77</td><td>N=339</td><td>N=75</td><td>N=341</td></tr
              ></thead
            ><tbody
              ><tr
                ><th>Gender</th><td /><td /><td>0.862</td><td /><td /><td
                  >0.599
                </td></tr
              ><tr
                ><td> Male</td><td>51(66.2%)</td><td>221(65.2%)</td><td /><td
                  >51(68.0%)</td
                ><td>221(64.8%)</td><td /></tr
              ><tr
                ><td> Female</td><td>26(33.8%)</td><td>118(34.8%)</td><td /><td
                  >24(32.0%)</td
                ><td>120(35.2%)</td><td /></tr
              ><tr
                ><th>Age</th><td /><td /><td>0.26</td><td /><td /><td>0.023*</td
                ></tr
              ><tr
                ><td> year (SD)</td><td>64.2(11.3)</td><td>65.7(10.4)</td><td
                /><td>62.9(11.0)</td><td>65.9(10.4)</td><td /></tr
              ><tr
                ><th>Metastasis</th><td /><td /><td>0.266</td><td /><td /><td
                  >1</td
                ></tr
              ><tr
                ><td>MX+M0</td><td>71(92.2%)</td><td>323(95.3%)</td><td /><td
                  >71(94.7%)</td
                ><td>323(94.7%)</td><td /></tr
              ><tr
                ><td>M1</td><td>6(7.8%)</td><td>16(4.7%)</td><td /><td
                  >4(5.3%)</td
                ><td>18(5.3%)</td><td /></tr
              ><tr
                ><th>Nodal metastasis </th><td /><td /><td>0.035*</td><td /><td
                /><td>0.252 </td></tr
              ><tr
                ><td> NX+N0+N1</td><td>55(71.4%)</td><td>198(58.4%)</td><td
                /><td>50(66.7%)</td><td>203(59.5%)</td><td /></tr
              ><tr
                ><td> N2+N3+N3a+N3b</td><td>22(28.6 %)</td><td>141(41.6%)</td
                ><td /><td>25(33.3%)</td><td>138(40.5%)</td><td /></tr
              ><tr
                ><th>Tumor invasion </th><td /><td /><td>0.075</td><td /><td
                /><td>0.025*</td></tr
              ><tr
                ><td> TX+T1+T1a+T1b+T2+T2a+T2b</td><td>28(36.4%)</td><td
                  >89(26.3%)</td
                ><td /><td>29(38.7%)</td><td>88(25.8%)</td><td /></tr
              ><tr
                ><td> T3+T4+T4a+T4b</td><td>49(63.6%)</td><td>250(73.8%)</td><td
                /><td>46(61.3%)</td><td>253(74.2%)</td><td /></tr
              ><tr
                ><th>Stage </th><td /><td /><td>0.009*</td><td /><td /><td
                  >0.051</td
                ></tr
              ><tr
                ><td> Stage I+IA+IB+II+IIA+IIB</td><td>45(62.5%)</td><td
                  >151(45.6%)</td
                ><td /><td>42(59.2%)</td><td>154(46.4%)</td><td /></tr
              ><tr
                ><td> Stage III+IIIA+IIIB+IIIC+IV</td><td>27(37.5%)</td><td
                  >180(54.4%)</td
                ><td /><td>29(40.9%)</td><td>178(53.6%)</td><td /></tr
              ><tr
                ><th>Residual tumor </th><td /><td /><td>0.463</td><td /><td
                /><td>0.921</td></tr
              ><tr
                ><td> RX+R0</td><td>72(94.7%)</td><td>288(92.3%)</td><td /><td
                  >67(93.1%)</td
                ><td>293(92.7%)</td><td /></tr
              ><tr
                ><td> R1+R2</td><td>4(5.3%)</td><td>24(7.7%)</td><td /><td
                  >5(6.9%)</td
                ><td>23(7.3%)</td><td /></tr
              ></tbody
            >
          </table>
        </StatTable>
      </div>

      <article class="pt-5">
        <h4 class="text-3xl capitalize">Survival Analysis</h4>
        <p>
          The prognostic value of two genes to gastric cancer patients were
          assessed by Cox proportional hazards model.
        </p>
      </article>

      <figure>
        <div class="flex flex-wrap xl:flex-nowrap justify-evenly p-5">
          <img
            class="p-5"
            style="width: 500px;"
            src="/images/survival of MTBP DSS.svg"
            alt="survival of MTBP DSS"
          />
          <img
            class="p-5"
            style="width: 500px;"
            src="/images/survival of KIF DSS.svg"
            alt="survival of KIF DSS"
          />
        </div>
      </figure>

      <div
        class="flex flex-wrap xl:flex-nowrap overflow-x-auto relative justify-center items-center"
        style="width: 100vw; left: calc(-50vw + 50%);"
      >
        <StatTable>
          <table>
            <thead
              ><tr><th /><th>HR</th><th>95%CI</th><th>P-value</th></tr></thead
            ><tbody
              ><tr
                ><th>MTBP group (ref=low)</th><td>1.36</td><td>(0.58,1.11)</td
                ><td>0.46</td></tr
              ><tr
                ><th>Age</th><td>1.01</td><td>(1.01,1.04)</td><td>0.68</td></tr
              ><tr
                ><th>Gender</th><td>2</td><td>(0.77,1.44)</td><td
                  >0.04*
                </td></tr
              ><tr
                ><th>Stage</th><td>1.51</td><td>(1.37,2.24)</td><td>0.12</td
                ></tr
              ><tr
                ><th>Tumor invasion</th><td>0.71</td><td>(0.78,1.25)</td><td
                  >0.15</td
                ></tr
              ></tbody
            >
          </table>
        </StatTable>

        <StatTable>
          <table>
            <thead
              ><tr><th /><th>HR</th><th>95%CI</th><th>P-value</th></tr></thead
            ><tbody
              ><tr
                ><th>KIF group (ref=low)</th><td>1.13</td><td>(0.58,1.11)</td
                ><td>0.71</td></tr
              ><tr><th>Age</th><td>1</td><td>(1.01,1.04)</td><td>0.75</td></tr
              ><tr
                ><th>Gender</th><td>2.09</td><td>(0.77,1.44)</td><td
                  >0.03*
                </td></tr
              ><tr
                ><th>Stage</th><td>1.52</td><td>(0.78,1.25)</td><td>0.11</td
                ></tr
              ><tr
                ><th>Tumor invasion</th><td>0.73</td><td>(0.58,1.12)</td><td
                  >0.18</td
                ></tr
              ></tbody
            >
          </table>
        </StatTable>
      </div>
    </section>
  </section>
</section>

<section class="flex flex-col font-serif p-10">
  <h3 class="text-4xl p-10">Supplement: Genes Interaction</h3>
  <section class="container mx-auto flex justify-center">
    <GeneInteraction id="gene-interaction" title="test" />
  </section>
</section>

<section class="flex flex-col font-serif p-10 bg-secondary text-danger">
  <h3 class="text-4xl p-10">Conclusion</h3>
  <section class="container mx-auto">
    <ol class="list-disc list-inside text-2xl">
      <li class="leading-loose">
        Using ML classification model and PCA, we have identified MTBP and KIF14
        as 2 candidates of potential GC biomarkers.
      </li>
      <li class="leading-loose">
        Published papers have shown that MTBP and KIF14 as two potential GC
        prognostic markers .
      </li>
      <li class="leading-loose">
        Further studies are required to validate the biological and clinical
        importance of MTBP and KIF14 in GC development.
      </li>
    </ol>
  </section>
</section>

<section class="flex flex-col font-serif p-10 bg-danger">
  <h3 class="text-4xl p-10">
    Contact & Responsibilities
    <p class="text-xs">* names in alphabetical order</p>
  </h3>
  <section class="container mx-auto pt-10 pb-10">
    <ContactSection />
  </section>
</section>
