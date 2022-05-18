import {CdkTreeModule} from '@angular/cdk/tree';
import {NgModule} from '@angular/core';
import {MatLegacyButtonModule} from '@angular/material/legacy-button';
import {MatIconModule} from '@angular/material/icon';
import {CdkTreeFlatExample} from './cdk-tree-flat/cdk-tree-flat-example';
import {CdkTreeNestedExample} from './cdk-tree-nested/cdk-tree-nested-example';
import {CdkTreeFlatLevelAccessorExample} from './cdk-tree-redesign/cdk-tree-flat-level-accessor-example';

export {CdkTreeFlatExample, CdkTreeNestedExample, CdkTreeFlatLevelAccessorExample};

const EXAMPLES = [CdkTreeFlatExample, CdkTreeNestedExample, CdkTreeFlatLevelAccessorExample];

@NgModule({
  imports: [CdkTreeModule, MatLegacyButtonModule, MatIconModule],
  declarations: EXAMPLES,
  exports: EXAMPLES,
})
export class CdkTreeExamplesModule {}
