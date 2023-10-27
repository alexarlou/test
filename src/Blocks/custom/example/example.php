<?php

/**
 * Template for the Example Block view.
 *
 * @package Testinggg
 */

use TestingggVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';

$exampleParagraphContent = Components::checkAttr('exampleParagraphContent', $attributes, $manifest);
?>

<div class="<?php echo esc_attr($blockClass); ?>">
  <div>
    <?php
    echo Components::render(
      'image',
      Components::props('image', $attributes, [
      'selectorClass' => 'image',
      'blockClass' => $blockClass, ])
    );
    
    echo Components::render(
      'heading',
      Components::props('heading', $attributes, [
      'selectorClass' => 'header',
      'blockClass' => $blockClass, ])
    );  

    echo Components::render(
      'paragraph',
      Components::props('paragraph', $attributes, [
      'selectorClass' => 'paragraph',
      'blockClass' => $blockClass, ])
    );  
    ?>
  </div>
  <div>
    <?php
    echo Components::render(
      'image',
      Components::props('secondImage', $attributes, [
      'selectorClass' => 'image',
      'blockClass' => $blockClass, ])
    );
    
    echo Components::render(
      'heading',
      Components::props('secondHeading', $attributes, [
      'selectorClass' => 'secondHeader',
      'blockClass' => $blockClass, ])
    );  

    echo Components::render(
      'paragraph',
      Components::props('secondParagraph', $attributes, [
      'selectorClass' => 'secondParagraph',
      'blockClass' => $blockClass, ])
    );    
    ?>
  </div>
</div>

