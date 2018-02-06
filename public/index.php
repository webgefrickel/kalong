<!doctype html>
<?php
  // use this constant to include different css/js files — you get the idea...
  define('DEBUGMODE', true);
?>
<html lang="de" class="no-js  <?= (DEBUGMODE) ? 'fonts-loaded' : '' ?>">
  <head>
    <meta charset="utf-8" />
    <title>kalong dummy testpage</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
    <link rel="icon" type="image/png" href="/assets/img/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/assets/img/favicon-16x16.png" sizes="16x16" />
    <link rel="mask-icon" href="/assets/img/safari-pinned-tab.svg" color="#f78474" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="/manifest.json" />

    <?php if (DEBUGMODE): ?>
      <link rel="stylesheet" href="/assets/css/main.css" />
    <?php else: ?>
      <link rel="stylesheet" href="/assets/css/main.min.css" />
      <link rel="preload" href="/assets/fonts/roboto-regular.woff2" as="font" type="font/woff2" crossorigin />
    <?php endif ?>
  </head>
  <body>

    <div class="wrapper">
      <h1>
        Yay! Put your stuff here or use this as a boilerplate
      </h1>

      <p>
        You can of course also add a CMS or use some other magic. I do. Both :-)
      </p>

      <h2>Headlines</h2>

      <h1>H1 Headline</h1>
      <h2>H2 Headline</h2>
      <h3>H3 Headline</h3>
      <h4>H4 Headline</h4>
      <h5>H5 Headline</h5>
      <h6>H6 Headline</h6>

      <h2>Text, horizontal ruler and an image</h2>
      <p>
        Manchmal Sätze, die alle Buchstaben des Alphabets enthalten - man nennt
        diese Sätze »Pangrams«. Sehr bekannt ist dieser: The quick brown fox jumps
        over the lazy old dog. Oft werden in Typoblindtexte auch fremdsprachige
        Satzteile eingebaut (AVAIL® and Wefox™ are testing aussi la Kerning),
        um die Wirkung in anderen Sprachen zu testen. In Lateinisch sieht zum
        Beispiel fast jede Schrift gut aus.
      </p>
      <hr />

      <figure>
        <img src="dummy.jpg" alt="Dummy Image" />
      </figure>

      <p>
        Quod erat demonstrandum. Seit 1975 fehlen in den meisten Testtexten die Zahlen,
        weswegen nach TypoGb. 204 § ab dem Jahr 2034 Zahlen in 86 der Texte zur
        Pflicht werden. Nichteinhaltung wird mit bis zu 245 € oder 368 $ bestraft.
        Genauso wichtig in sind mittlerweile auch Âçcèñtë, die in neueren Schriften
        aber fast immer enthalten sind. Ein wichtiges aber schwierig zu integrierendes
        Feld sind OpenType-Funktionalitäten.
      </p>

      <h2>Grid Test</h2>

      <div class="grid  grid--2">
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
      </div>

      <div class="grid  grid--3">
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
      </div>

      <div class="grid  grid--custom">
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
        <div class="grid__column"><p>Pellentesque convallis at lorem in tincidunt. Vivamus nec sem id ligula gravida accumsan id a massa. Nunc efficitur dolor vitae velit maximus finibus. Praesent et placerat turpis, ut tincidunt justo. Praesent interdum semper ipsum at rhoncus. Duis eu nisl pulvinar, congue ligula eget, efficitur metus. Vivamus sed faucibus diam</p></div>
      </div>

      <h2>Lists</h2>
      <h3>Unordered List</h3>
      <ul>
        <li>list item in an unsorted list</li>
        <li>list item in an unsorted list</li>
        <li>list item in an unsorted list
          <ul>
            <li>list item in an unsorted list, second level</li>
            <li>list item in an unsorted list, second level</li>
          </ul>
        </li>
        <li>list item in an unsorted list</li>
      </ul>

      <h3>Ordered List</h3>
      <ol>
        <li>list item in an unsorted list</li>
        <li>list item in an unsorted list</li>
        <li>list item in an unsorted list
          <ol>
            <li>list item in an unsorted list, second level</li>
            <li>list item in an unsorted list, second level</li>
          </ol>
        </li>
        <li>list item in an unsorted list</li>
      </ol>

      <h3>Definition List</h3>
      <dl>
        <dt>HTML</dt>
        <dd>Abbreviation for HyperText Markup Language - a language used to make web pages.</dd>

        <dt>Dog</dt>
        <dd>Any carnivorous animal belonging to the family Canidae.</dd>
        <dd>The domesticated sub-species of the family Canidae, Canis lupus familiaris.</dd>

        <dt>Moo juice</dt>
        <dt>Cat beer</dt>
        <dt>Milk</dt>
        <dd>A white liquid produced by cows and used for human consumption.</dd>
      </dl>

      <h2>Tables</h2>
      <table>
        <caption>Jimi Hendrix - albums</caption>
        <thead>
          <tr>
            <th>Album</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Album</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Are You Experienced</td>
            <td>1967</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Axis: Bold as Love</td>
            <td>1967</td>
            <td>$12.00</td>
          </tr>
          <tr>
            <td>Electric Ladyland</td>
            <td>1968</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Band of Gypsys</td>
            <td>1970</td>
            <td>$12.00</td>
          </tr>
        </tbody>
      </table>

      <h2>Some form elements</h2>
      <form action="/" method="post">
        <fieldset>
          <legend>Form</legend>
          <ul>
            <li>
              <label for="form-name">Name<span>(required)</span></label>
              <input type="text" name="form-name" id="form-name" required aria-required="true" />
            </li>

            <li>
              <label for="form-email">Email<span>(required)</span></label>
              <input type="email" name="form-email" id="form-email" required aria-required="true" />
            </li>

            <li>
              <label for="form-website">Website</label>
              <input type="text" name="form-website" id="form-website" />
            </li>

            <li>
              <label for="form-text">Text<span>(required)</span></label>
              <textarea name="form-text" id="form-text" rows="20" required aria-required="true"></textarea>
            </li>
          </ul>

          <p>
            <button class="button" type="submit">Submit form</button>
          </p>
        </fieldset>
      </form>

      <h2>SVG icons testcase</h2>
      <button class="button">
        <svg class="icon  icon--close">
          <use xlink:href="assets/img/sprite.svg#icon--close"/>
        </svg>
        Close
      </button>

      <button class="button">
        Menu
        <svg class="icon  icon--menu">
          <use xlink:href="assets/img/sprite.svg#icon--menu"/>
        </svg>
      </button>

    </div>

    <?php if (DEBUGMODE): ?>
      <script type="module" src="/assets/js/main.js"></script>
    <?php else: ?>
      <?php /* load legacy js code for browser, that do not support es2017+ */ ?>
      <script type="module" src="/assets/js/main.min.js"></script>
      <script nomodule src="/assets/js/main.legacy.min.js"></script>
      <?php /* if you want to use the serviceworker, uncomment this
      <script>
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/serviceworker.js');
        }
      </script>
      */ ?>
    <?php endif ?>
  </body>
</html>
