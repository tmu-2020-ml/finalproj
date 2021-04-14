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
      <p>Eastern Asia has the highest incidence rate of GC around the world.</p>
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
        <span>
          quoted <a
            href="https://xenabrowser.net/datapages/?host=https%3A%2F%2Ftcga.xenahubs.net&removeHub=https%3A%2F%2Fxena.treehouse.gi.ucsc.edu%3A443"
            >from UCSC
          </a></span
        >
      </blockquote>
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
