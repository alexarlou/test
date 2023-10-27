import React, { useMemo } from 'react'
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { checkAttr, getAttrKey } from '@eightshift/frontend-libs/scripts';
import manifest from './../manifest.json';
import globalManifest from './../../../manifest.json';
import { getUnique, outputCssVariables, props } from '@eightshift/frontend-libs/scripts';
import { ImageEditor } from '../../../components/image/components/image-editor';
import { HeadingEditor } from '../../../components/heading/components/heading-editor';
import { ParagraphEditor } from '../../../components/paragraph/components/paragraph-editor';

export const ExampleEditor = ({ attributes, setAttributes }) => {
	const {
		blockClass,
	} = attributes;
  const unique = useMemo(() => getUnique(), []);

	const exampleParagraphContent = checkAttr('exampleParagraphContent', attributes, manifest);
  const exampleSecondParagraphContent = checkAttr('exampleSecondParagraphContent', attributes, manifest);



	return (
    <div className={blockClass} data-id={unique}>
      {outputCssVariables(attributes, manifest, unique, globalManifest)}
      <div>
        <ImageEditor
          {...props('image', attributes, {
          setAttributes })}
        />
        <HeadingEditor
         placeholder={__('Add heading', 'fse-eightshift')}
          {...props('heading', attributes, {
            setAttributes,
          })}
        />
        <ParagraphEditor      
          {...props('paragraph', attributes, {
            selectorClass: "paragraph",
            setAttributes,
          })}
        />
      </div>
      <div>
        <ImageEditor
          {...props('secondImage', attributes, {
          setAttributes })}
        />
        <HeadingEditor
          placeholder={__('Add heading', 'fse-eightshift')}
          {...props('secondHeading', attributes, {
            selectorClass: "secondHeading",
            setAttributes,
          })}
        />
       <ParagraphEditor
          {...props('secondParagraph', attributes, {
            selectorClass: "secondParagraph",
            setAttributes,
          })}
        />
      </div>
    </div>
	);
};
