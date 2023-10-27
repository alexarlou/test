import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	checkAttr,
	getAttrKey,
	UseToggle,
	generateUseToggleConfig,
	Section,
	IconToggle,
	OptionSelector,
	icons,
	ReOrderable,
	ReOrderableItem,
} from '@eightshift/frontend-libs/scripts';
import manifest from './../manifest.json';

export const SocialNetworksOptions = (attributes) => {
	const {
		setAttributes,

		hideModeSelector = false,
		hideNetworkPicker = false,
	} = attributes;

	const socialNetworksShareMode = checkAttr('socialNetworksShareMode', attributes, manifest);
	const socialNetworksNetworks = checkAttr('socialNetworksNetworks', attributes, manifest);

	const modeOptions = [
		{
			label: __('Link to social networks', 'testinggg'),
			icon: icons.link,
			value: false,
		},
		{
			label: __('Share to social networks', 'testinggg'),
			icon: icons.share,
			value: true,
		}
	];

	const pickerSectionTitle = socialNetworksShareMode ? __('Share targets', 'testinggg') : __('Social networks', 'testinggg');

	return (
		<UseToggle {...generateUseToggleConfig(attributes, manifest, 'socialNetworksUse')}>
			{!hideModeSelector &&
				<OptionSelector
					icon={icons.gears}
					label={__('Mode', 'testinggg')}
					value={socialNetworksShareMode}
					options={modeOptions}
					onChange={(value) => setAttributes({
						[getAttrKey('socialNetworksShareMode', attributes, manifest)]: value,
						[getAttrKey('socialNetworksNetworks', attributes, manifest)]: socialNetworksNetworks.map((network) => ({ ...network, enabled: false })),
					})}
					alignment='vertical'
				/>
			}

			<Section
				showIf={!hideNetworkPicker}
				label={!hideModeSelector && pickerSectionTitle}
				icon={!hideModeSelector && icons.globe}
				noBottomSpacing
			>
				<ReOrderable
					items={socialNetworksNetworks}
					attributeName={getAttrKey('socialNetworksNetworks', attributes, manifest)}
					setAttributes={setAttributes}
					noBottomSpacing
				>
					{socialNetworksNetworks.filter(({ id }) =>
						socialNetworksShareMode ? manifest.networks[id]?.shareUrl?.length > 0 : manifest.networks[id]?.url?.length > 0)
						.map((item, i) => {
							return (
								<ReOrderableItem
									key={item?.id}
									icon={<div className='es-line-h-0' dangerouslySetInnerHTML={{ __html: manifest?.networks?.[item.id]?.icon }}></div>}
									title={manifest?.networks?.[item.id]?.title}
									postIcon={
										<IconToggle
											checked={socialNetworksNetworks[i].enabled}
											onChange={(value) => {
												const newValue = [...socialNetworksNetworks];
												newValue[i].enabled = value;

												setAttributes({ [getAttrKey('socialNetworksNetworks', attributes, manifest)]: newValue });
											}}
											noBottomSpacing
										/>
									}
								/>
							);
						})}
				</ReOrderable>
			</Section>
		</UseToggle>
	);
};
