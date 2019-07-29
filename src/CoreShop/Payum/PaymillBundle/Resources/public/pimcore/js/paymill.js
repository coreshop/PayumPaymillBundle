/*
 * CoreShop.
 *
 * This source file is subject to the GNU General Public License version 3 (GPLv3)
 * For the full copyright and license information, please view the LICENSE.md and gpl-3.0.txt
 * files that are distributed with this source code.
 *
 * @copyright  Copyright (c) 2015-2017 Dominik Pfaffenbauer (https://www.pfaffenbauer.at)
 * @license    https://www.coreshop.org/license     GNU General Public License version 3 (GPLv3)
 *
 */

pimcore.registerNS('coreshop.provider.gateways.paymill');
coreshop.provider.gateways.paymill = Class.create(coreshop.provider.gateways.abstract, {
    getLayout: function (config) {
        return [
            {
                xtype: 'textfield',
                fieldLabel: t('paymill_public_key'),
                name: 'gatewayConfig.config.public_key',
                length: 255,
                value: config.public_key ? config.public_key : ""
            },
            {
                xtype: 'textfield',
                fieldLabel: t('paymill_private_key'),
                name: 'gatewayConfig.config.private_key',
                length: 255,
                value: config.private_key ? config.private_key : ""
            }
        ];
    }
});
