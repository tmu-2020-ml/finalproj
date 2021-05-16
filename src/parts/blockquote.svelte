<div class="blockquote-wrapper p-5">
  <div class="blockquote w-full">
    <div class="bq-content">
      <slot name="content" />
    </div>

    <div class="bq-cite italic text-link">
      &mdash;
      <slot name="cite" />
    </div>
  </div>
</div>

<style>
  .blockquote-wrapper {
    display: flex;
  }

  .blockquote {
    position: relative;
    align-self: center;
  }

  .blockquote .bq-content {
    position: relative; /* for pseudos */
    margin: 0;
    border: solid 2px #ff729f;
    border-radius: 20px;
    padding: 25px;
  }

  .blockquote .bq-content:after {
    content: '';
    position: absolute;
    border: 2px solid #ff729f;
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -60px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  .blockquote .bq-content:before {
    content: '';
    position: absolute;
    width: 80px;
    border: 6px solid white;
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  .blockquote .bq-cite {
    position: relative;
    margin: 0;
    padding-top: 15px;
    z-index: 1;
    margin-left: 150px;
    padding-left: 12px;
  }

  .blockquote .bq-cite:first-letter {
    margin-left: -12px;
  }

  .blockquote .bq-cite :global(a) {
    text-decoration: underline;
  }
</style>
