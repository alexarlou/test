import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { HeadingOptions as HeadingOptionsComponent } from '../../../components/heading/components/heading-options';
import { ImageOptions as ImageOptionsComponent } from '../../../components/image/components/image-options';
import { ParagraphOptions as ParagraphOptionsComponent } from '../../../components/paragraph/components/paragraph-options';

import { checkAttr, getAttrKey, getOption, props, OptionSelector } from '@eightshift/frontend-libs/scripts';
import manifest from '../manifest';
import paragraphManifest from '../../../components/paragraph/manifest';
import headingManifest from '../../../components/heading/manifest';


export const ExampleOptions = ({ attributes, setAttributes }) => {
  // const headingSize = checkAttr('headingSize', attributes, manifest);

  console.log(attributes);

  const exampleHeadingAlign = checkAttr('exampleHeadingAlign', attributes, manifest);
	const exampleSecondHeadingAlign = checkAttr('exampleSecondHeadingAlign', attributes, manifest);


	const exampleParagraphAlign = checkAttr('exampleParagraphAlign', attributes, manifest);
	const exampleSecondParagraphAlign = checkAttr('exampleSecondParagraphAlign', attributes, manifest);

	return (
		<PanelBody title={__('Example', 'fse-eightshift')}>
      <p class="options-separator">Left column</p>
      <ImageOptionsComponent
				{...props('image', attributes, { setAttributes })}
			/>
      <HeadingOptionsComponent
				{...props('heading', attributes, { setAttributes })}
        additionalControls={
					<OptionSelector
						value={exampleHeadingAlign}
						options={getOption('exampleHeadingAlign', attributes, manifest)}
						onChange={(value) => setAttributes({ [getAttrKey('exampleHeadingAlign', attributes, manifest)]: value })}
						noBottomSpacing
						iconOnly
					/>
				}
				noExpandButton
				noUseToggle
				noLabel
			/>
       <ParagraphOptionsComponent
				{...props('paragraph', attributes, { setAttributes })}
        additionalControls={
					<OptionSelector
						value={exampleParagraphAlign}
						options={getOption('exampleParagraphAlign', attributes, manifest)}
						onChange={(value) => setAttributes({ [getAttrKey('exampleParagraphAlign', attributes, manifest)]: value })}
						noBottomSpacing
						iconOnly
					/>
				}
				noLabel
				noUseToggle
				noExpandButton
			/>



      <p class="options-separator">Right column</p>
      <ImageOptionsComponent
				{...props('secondImage', attributes, { setAttributes })}
			/>
      <HeadingOptionsComponent
				{...props('secondHeading', attributes, { setAttributes })}
        additionalControls={
					<OptionSelector
						value={exampleSecondHeadingAlign}
						options={getOption('exampleSecondHeadingAlign', attributes, manifest)}
						onChange={(value) => setAttributes({ [getAttrKey('exampleSecondHeadingAlign', attributes, manifest)]: value })}
						noBottomSpacing
						iconOnly
					/>
				}
				noExpandButton
				noUseToggle
				noLabel
			/>
      <ParagraphOptionsComponent
				{...props('secondParagraph', attributes, { setAttributes })}
        additionalControls={
					<OptionSelector
						value={exampleSecondParagraphAlign}
						options={getOption('exampleSecondParagraphAlign', attributes, manifest)}
						onChange={(value) => setAttributes({ [getAttrKey('exampleSecondParagraphAlign', attributes, manifest)]: value })}
						noBottomSpacing
						iconOnly
					/>
				}
				noLabel
				noUseToggle
				noExpandButton
			/>
    
		</PanelBody>
	);
};
