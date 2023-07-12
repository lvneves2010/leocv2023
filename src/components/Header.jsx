import * as React from 'react';

import {
	Header,
	HeaderName,
	HeaderGlobalBar,
	HeaderGlobalAction,
	Grid,
	Row,
	Column
} from 'carbon-components-react';
import { User20 } from '@carbon/icons-react';


function HomePageHeader() {


	return(
        <Header aria-label="Core Services">
            <Grid>
                <Row>
                    <Column>
                        <HeaderName prefix="">
                              Leonardo Vinicius Neves
                        </HeaderName>
                    </Column>
                    <Column>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction
                                title="User"
                                aria-label="User"
                                className="header-action--user-info"
                            >
                                <User20 />
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </Column>
                </Row>
            </Grid>
        </Header>
	);
}

export default HomePageHeader;
