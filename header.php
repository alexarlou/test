<?php

/**
 * Main header file
 *
 * @package Testinggg
 */

use TestingggVendor\EightshiftLibs\Helpers\Components;
use Testinggg\Manifest\Manifest;
use Testinggg\AdminMenus\ReusableBlocksHeaderFooter;

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<?php
	// Head component.
	echo Components::render('head', [
		'icon' => apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg'),
	]);

	wp_head();
	?>
</head>
<body <?php body_class(); ?>>

<?php
// Header reusable block.
$headerPartialId = get_option(ReusableBlocksHeaderFooter::HEADER_PARTIAL) ?? '';
ReusableBlocksHeaderFooter::renderPartial($headerPartialId);
?>

<main class="main-content" id="main-content">
