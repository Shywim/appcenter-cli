/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a IntuneStoreRequestAppCategory.
 */
class IntuneStoreRequestAppCategory {
  /**
   * Create a IntuneStoreRequestAppCategory.
   * @property {string} [name] display name for the app category
   */
  constructor() {
  }

  /**
   * Defines the metadata of IntuneStoreRequestAppCategory
   *
   * @returns {object} metadata of IntuneStoreRequestAppCategory
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntuneStoreRequest_app_category',
      type: {
        name: 'Composite',
        className: 'IntuneStoreRequestAppCategory',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntuneStoreRequestAppCategory;
