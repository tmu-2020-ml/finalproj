<script lang="ts">
  import GeneTable from './parts/gene_table.svelte';
  import TCGASampleTable from './parts/tcga_sample_table.svelte';
</script>

<svelte:head>
  <base target="_blank" />
</svelte:head>

<main>
  <header>
    <h1 class="text-6xl">
      Identification of potential gastric cancer biomarkers
    </h1>
    <h2 class="text-4xl">using TCGA-based cancer prediction model</h2>
  </header>

  <section>
    <article>
      <h3 class="text-4xl">Motivation</h3>
      <p>
        Gastric cancer (GC) has the 5th incidence rate among cancers and is the
        3rd leading cause of cancer death worldwide.
      </p>
      <img src="images/p1_1.png" alt="" />
      <p>Eastern Asia has the highest incidence rate of GC around the world.</p>
      <img src="images/p1_2.png" alt="" />
      <cite>CA Cancer J Clin. 2018 Nov;68(6):394-424.</cite>
    </article>

    <article>
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
    </article>
    <article>
      <h3 class="text-4xl">TCGA Dataset</h3>
      <blockquote>
        The Cancer Genome Atlas (TCGA), a collaboration between the National
        Cancer Institute (NCI) and National Human Genome Research Institute
        (NHGRI), has generated comprehensive, multi-dimensional maps of the key
        genomic changes in 33 types of cancer. The TCGA dataset, describing
        tumor tissue and matched normal tissues from more than 11,000 patients,
        is publically available and has been used widely by the research
        community. The data have contributed to more than a thousand studies of
        cancer by independent researchers and to the TCGA research network
        publications.
        <cite>
          quoted <a
            href="https://xenabrowser.net/datapages/?host=https%3A%2F%2Ftcga.xenahubs.net&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443"
            >from UCSC
          </a></cite
        >
      </blockquote>

      <TCGASampleTable />
    </article>

    <article>
      <h3 class="text-4xl">Inspiration</h3>
      <blockquote>
        We evidenced a gene expression signature associated to muscle
        contraction-related genes in specimens obtained from OSCC patients with
        lymph node involvement. This gene signature suggests the presence of
        myofibroblasts in tumor stoma of patients with lymph node involvement
        and emphasizes the decisive role played by myofibroblasts probably
        through their secretome in determining OSCC invasiveness.
        <cite
          ><a href="https://www.oncotarget.com/article/20645/text/"
            >A primary tumor gene expression signature identifies a crucial role
            played by tumor stroma myofibroblasts in lymph node involvement in
            oral squamous cell carcinoma</a
          ></cite
        >
      </blockquote>

      <GeneTable />

      <p>
        It found out 41 differentially expressed expressed genes which fold
        change greater than 2 and p-value less than 0.05.
      </p>

      <img src="images/p3_1.jpg" alt="" />

      <p>
        The PCA plot shows two distinct clusters: OSCC with and without lymph
        node involvement (N+ and N-).
      </p>
    </article>

    <article>
      <h3 class="text-4xl">Our approach</h3>
      <ol class="list-disc list-inside">
        <li>Preprocessing the raw data.</li>
        <li>Reducing variables by Student's t-test</li>
        <li>
          Differentiating GC/normal with the accuracy score by Naïve Bays model.
        </li>
        <li>Finding Clinical relevance with OR and AUC analysis.</li>
      </ol>
    </article>

    <article>
      <h3 class="text-4xl">Conclusion</h3>
      <ol class="list-disc list-inside">
        <li>
          Using ML classification model and PCA, we have identified MTBP and
          KIF14 as 2 candidates of potential GC biomarkers.
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
    </article>

    <article>
      <h3 class="text-4xl">Responsibilities</h3>

      <dl>
        <dt>Su Jing Jhong</dt>
        <dd>
          <ul class="list-disc list-inside">
            <li>Data processing and ML classification model implementation.</li>
            <li>Setup and design the website.</li>
          </ul>
        </dd>

        <dt>Tsao Yen Ping</dt>
        <dd>
          <ul class="list-disc list-inside">
            <li>ROC chart for MTBP, KIF14 using R.</li>
            <li>
              Contingency table, calculation of sensitivity, specificity and AUC
              for MTBP, KIF14 and combined genes
            </li>
          </ul>
        </dd>

        <dt>Chen Chi Ya</dt>
        <dd>Clinical statistics</dd>
        <dt>Chen Yan Jin</dt>
        <dd>
          <ul class="list-disc list-inside">
            <li>Data preprocessing using R.</li>
            <li>
              Calculation of Chi-square test, OR, 95% CI and p-value using SAS.
            </li>
            <li>Cluster plot for MTBP, KIF14 using R</li>
          </ul>
        </dd>

        <dt>Huang Bo Shih</dt>
        <dd>
          <ul class="list-disc list-inside">
            <li>PCA analysis.</li>
            <li>Project organization.</li>
          </ul>
        </dd>
      </dl>
    </article>
  </section>

  <img src="./loading.svg" alt="loading" />
</main>
