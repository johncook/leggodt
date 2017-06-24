Leggodt
=======

A suite of paragraph types.

Installation
------------

  * Install the module as you normally would.
  * Go to your content type and add a new field to type Entity revisions, Paragraphs.
  * Allow unlimited so creators can add more that one Paragraph to the node.
  * On the field edit screen, you can add instructions, and choose which bundles you want to allow for this field.
  * Arrange them as you see fit. Click Save Settings.
  * Adjust your form display, placing the field where you want it.
  * Add the field into the Manage display tab.
  * Start creating content!
  
_**TODO:** Improve installation instructions._

Requirements
------------

_**TODO:** Add required modules._

Bundle Types
------------

### Content

**Text**

For text formatting.

A restricted text format is included that only allows bold, italics, lists and links.
This is to dissuade content editors from using it to enter a blob of data.

**Heading**

Adds a heading to the content.

Allows the addition of H2 - H6 headers. H1 is usually used for the page title so is not allowed by default.

**Image**

Insert an image into the content.

The image is displayed at the original upload size.

**Contact Form**

Insert any of the contact forms available on the site.

The forms must have been created at /admin/structure/contact first. 

**Block**

The ability to add blocks from the blocks system into the content flow.

**View**

Add a view. By default only block views are available.

**Pull quote**

A pull quote is a piece of text, out of context, from further in the document.

By default it is shown out of flow.

**Quotation**

This is something said by someone else and has a place for attributing the source.

One use case would be for a testimonial. 

**Button**

Although labeled "button" a better term for this would be "call to action".

It is a link to another URL with optional styling to make it stand out from other links. 

### Layout

**Columns**

There are three different column styles.

- Even

  1 to 6 columns can be added. All of the columns will try to be the same width.

- 2 column

  Allows for 2 columns with a different widths.

- 3 column

  Allows for 3 columns. By default the two smaller columns will have the same width.

**Section**

A section holds a number of paragraphs. This can be used in conjunction with other layout paragraph types so that they
are able to contain multiple paragraphs.

Section paragraphs also have a styling option.

**Aside**

An additional, but related, piece of content.

There are options for the width of the aside and which side of the content to position it.

**Carousel**

A rotating display of paragraphs.

By default it uses the [Slick Carousel](http://kenwheeler.github.io/slick/) from a CDN to implement the carousel.

**Accordion**

A collapsible list of containers. This contains one or more Accordion Item paragraphs, each of which has a heading and a
content paragraph.

**Tabs**

Similar to the Accordion paragraph, this allows many paragraphs to share the same place in the content flow. Tabs also
uses an item paragraph (Tabs Item) to define each tab pane and title.

### Ponies

When using Paragraphs, a Pony is special use case that tends to need a lot of attention to detail. Some common potential
ponies are included as a starting point. 

**Hero**

This is an image and content paragraph bundle. Something similar to this is used at the top of most homepages.  

**Timeline**

This is a connected set of events or stages.  It can be used as a history of events or as an illustration of work-flow.

Supporting Organization
-----------------------

- [Creode](http://www.creode.co.uk/)
