/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AlertingBugtrackerSettings class.
 * @constructor
 * Bugtracker specific settings
 *
 * @member {string} [callbackUrl]
 * 
 * @member {string} ownerName
 * 
 * @member {string} type Polymorhpic Discriminator
 * 
 */
function AlertingBugtrackerSettings() {
}

/**
 * Defines the metadata of AlertingBugtrackerSettings
 *
 * @returns {object} metadata of AlertingBugtrackerSettings
 *
 */
AlertingBugtrackerSettings.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertingBugtrackerSettings',
    type: {
      name: 'Composite',
      polymorphicDiscriminator: 'type',
      uberParent: 'AlertingBugtrackerSettings',
      className: 'AlertingBugtrackerSettings',
      modelProperties: {
        callbackUrl: {
          required: false,
          serializedName: 'callback_url',
          type: {
            name: 'String'
          }
        },
        ownerName: {
          required: true,
          serializedName: 'owner_name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AlertingBugtrackerSettings;