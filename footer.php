<?php

/**
 * Display footer.
 *
 * @package Testinggg
 */

use Testinggg\AdminMenus\ReusableBlocksHeaderFooter;

?>

</main>

<?php
$footerPartialId = get_option(ReusableBlocksHeaderFooter::FOOTER_PARTIAL) ?? '';
ReusableBlocksHeaderFooter::renderPartial($footerPartialId);

wp_footer();
?>
</body>
</html>
