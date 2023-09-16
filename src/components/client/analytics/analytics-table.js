import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import LayoutSettings from './layout-settings';

import avatar1 from '../../../assets/img/avatars/1.png';
import avatar2 from '../../../assets/img/avatars/2.png';
import avatar3 from '../../../assets/img/avatars/3.png';
import avatar4 from '../../../assets/img/avatars/4.png';
import avatar5 from '../../../assets/img/avatars/5.png';
import avatar6 from '../../../assets/img/avatars/6.png';
import avatar7 from '../../../assets/img/avatars/7.png';
import avatar8 from '../../../assets/img/avatars/8.png';
import avatar9 from '../../../assets/img/avatars/9.png';
import avatar10 from '../../../assets/img/avatars/10.png';
import avatar11 from '../../../assets/img/avatars/11.png';
import avatar12 from '../../../assets/img/avatars/12.png';
import avatar13 from '../../../assets/img/avatars/13.png';
import nft1 from '../../../assets/img/nfts/nft1.svg';
import nft2 from '../../../assets/img/nfts/nft2.svg';
import nft3 from '../../../assets/img/nfts/nft3.svg';
import nft4 from '../../../assets/img/nfts/nft4.svg';
import nft5 from '../../../assets/img/nfts/nft5.svg';
import AvatarNumber from './avatar-number';

const AnalyticsTable = () => {
  const [products, setProducts] = useState([]);
  const productService = {
    data: [
      {
        id: '1000',
        code: 'f230fh0g3',
        user: { name: 'Bamboo Watch', image: avatar10 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 65,
        twitter: '@ddde',
        quantity: 24,
        email: 'a@a.a',
        telegram: '@INSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1],
        technology: 123,
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        user: { name: 'Blue Band', image: avatar3 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 79,
        twitter: '@ddde',
        quantity: 2,
        email: 'a@a.a',
        telegram: '@LOWSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2, nft3],
        technology: 123,
      },
      {
        id: '1003',
        code: '244wgerg2',
        user: { name: 'Blue T-Shirt', image: avatar4 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 29,
        twitter: '@ddde',
        quantity: 25,
        email: 'a@a.a',
        telegram: '@INSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2, nft3, nft4],
        technology: 123,
      },
      {
        id: '1004',
        code: 'h456wer53',
        user: { name: 'Bracelet', image: avatar5 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 15,
        twitter: '@ddde',
        quantity: 73,
        email: 'a@a.a',
        telegram: '@INSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2],
        technology: 123,
      },
      {
        id: '1005',
        code: 'av2231fwg',
        user: { name: 'Brown Purse', image: avatar5 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 120,
        twitter: '@ddde',
        quantity: 0,
        email: 'a@a.a',
        telegram: '@OUTOFSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2, nft3],
        technology: 123,
      },
      {
        id: '1006',
        code: 'bib36pfvm',
        user: { name: 'Chakra Bracelet', image: avatar6 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 32,
        twitter: '@ddde',
        quantity: 5,
        email: 'a@a.a',
        telegram: '@LOWSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2, nft3, nft4, nft5],
        technology: 123,
      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        user: { name: 'Galaxy Earrings', image: avatar7 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 34,
        twitter: '@ddde',
        quantity: 23,
        email: 'a@a.a',
        telegram: '@INSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2],
        technology: 123,
      },
      {
        id: '1008',
        code: 'vbb124btr',
        user: { name: 'Game Controller', image: avatar8 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 99,
        twitter: '@ddde',
        quantity: 2,
        email: 'a@a.a',
        telegram: '@LOWSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2, nft3],
        technology: 123,
      },
      {
        id: '1009',
        code: 'cm230f032',
        user: { name: 'Gaming Set', image: avatar9 },
        description: 'Product Description',
        governance: 100,
        social: 200,
        technologial: 300,
        education: 400,
        done: 199,
        pending: 10,
        notdone: 8,
        joindate: '5/19/23',
        discord: '@devengineer',
        projecttoken: 299,
        twitter: '@ddde',
        quantity: 63,
        email: 'a@a.a',
        telegram: '@INSTOCK',
        usdamount: 150,
        wallet: '0x12312312',
        walletage: '100 days',
        country: 'Ukraine',
        nft: [nft1, nft2, nft3, nft4, nft5],
        technology: 123,
      },
    ],
  };

  useEffect(() => {
    setProducts(productService.data);
  }, []);

  const representativeUser = (rowData) => {
    return (
      <>
        <div>
          <div className="flex align-items-center">
            <img
              alt={rowData.user.image}
              src={rowData.user.image}
              style={{
                width: '30px',
                height: '30px',
                marginRight: '8px',
              }}
            />
            <span className={{ textAlign: 'left' }}>{rowData.user.name}</span>
          </div>
        </div>
      </>
    );
  };

  const representativeNFT = (rowData) => {
    return (
      <div>
        {rowData.nft.slice(0, 3).map((item, index) => (
          <img
            key={index}
            alt="item"
            src={item}
            style={{ width: '30px', height: '30px', marginRight: '-15px' }}
          />
        ))}
        {rowData.nft.length > 4 && <AvatarNumber number={rowData.nft.length - 3} />}
      </div>
    );
  };

  // const dynamic
  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column
          header="Name"
          rowSpan={2}
          field="user.name"
          className="analytics-datatable-header analytics-name"
        />

        <Column header="Karma" colSpan={4} className="analytics-karma-quests" />
        <Column header="Quests" colSpan={3} className="analytics-karma-quests" />

        <Column header="NFT" rowSpan={2} field="nft" className="analytics-nft" />
        <Column header="Join date" rowSpan={2} field="joindate" className="analytics-joindate" />
        <Column header="Discord" rowSpan={2} field="discord" className="analytics-social" />
        <Column header="Twitter" rowSpan={2} field="twitter" className="analytics-social" />
        <Column header="Telegram" rowSpan={2} field="telegram" className="analytics-social" />
        <Column header="Email" rowSpan={2} field="email" className="analytics-social" />
        <Column header="Country" rowSpan={2} field="country" className="analytics-social" />
        <Column header="Wallet" rowSpan={2} field="wallet" className="analytics-social" />
        <Column header="Wallet age" rowSpan={2} field="walletage" className="analytics-social" />
        <Column header="USD amount" rowSpan={2} field="usdamount" className="analytics-usd" />
        <Column
          header="Project token"
          rowSpan={2}
          field="projecttoken"
          className="analytics-token"
        />
      </Row>
      <Row>
        <Column header="Gov..." colSpan={1} field="governance" className="analytics-karma " />
        <Column header="Social" colSpan={1} field="social" className="analytics-karma" />
        <Column header="Tech..." colSpan={1} field="technologial" className="analytics-karma" />
        <Column header="Edu..." colSpan={1} field="education" className="analytics-karma" />
        <Column header="Done" colSpan={1} field="done" className="analytics-quests" />
        <Column header="Pending" colSpan={1} field="pending" className="analytics-quests" />
        <Column header="Not done" colSpan={1} field="notdone" className="analytics-quests" />
      </Row>
    </ColumnGroup>
  );
  return (
    <div>
      <div className="flex align-items-center justify-content-between analytics-title-bar">
        <span className="analytics-title">Users Dashboard</span>
        <LayoutSettings />
      </div>
      <div className="card" style={{ borderRadius: '8px' }}>
        <DataTable
          value={products}
          headerColumnGroup={headerGroup}
          showGridlines
          responsiveLayout="scroll"
          style={{ borderRadius: '8px' }}
        >
          <Column
            header="Name"
            field="user.name"
            body={representativeUser}
            className="analytics-datatable-cell"
          />
          <Column
            field="governance"
            header="Governance"
            className="analytics-datatable-cell"
          ></Column>
          <Column field="social" header="Social" className="analytics-datatable-cell"></Column>
          <Column
            field="technology"
            header="Technology"
            className="analytics-datatable-cell"
          ></Column>
          <Column
            field="education"
            header="Education"
            className="analytics-datatable-cell"
          ></Column>
          <Column field="done" header="Done" className="analytics-datatable-cell"></Column>
          <Column field="pending" header="Pending" className="analytics-datatable-cell"></Column>
          <Column field="notdone" header="Not Done" className="analytics-datatable-cell"></Column>
          <Column
            field="nft"
            header="NFT"
            body={representativeNFT}
            className="analytics-datatable-cell"
          ></Column>
          <Column field="joindate" header="Join Date" className="analytics-datatable-cell"></Column>
          <Column field="discord" header="Discord" className="analytics-datatable-cell"></Column>
          <Column field="twitter" header="Twitter" className="analytics-datatable-cell"></Column>
          <Column field="telegram" header="Telegram" className="analytics-datatable-cell"></Column>
          <Column field="email" header="Email" className="analytics-datatable-cell"></Column>
          <Column field="country" header="Country" className="analytics-datatable-cell"></Column>
          <Column field="wallet" header="Wallet" className="analytics-datatable-cell"></Column>
          <Column
            field="walletage"
            header="Wallet age"
            className="analytics-datatable-cell"
          ></Column>
          <Column
            field="usdamount"
            header="USD amount"
            className="analytics-datatable-cell"
          ></Column>
          <Column
            field="projecttoken"
            header="Project token"
            className="analytics-datatable-cell"
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default AnalyticsTable;
