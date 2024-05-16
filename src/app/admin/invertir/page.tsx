'use client';
import Banner from 'components/admin/invertir/Banner';
import NFtone from '/public/img/nfts/Nftone.png';
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import NFt5 from '/public/img/nfts/Nft5.png';
import NFt6 from '/public/img/nfts/Nft6.png';
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar2 from '/public/img/avatars/avatar2.png';
import avatar3 from '/public/img/avatars/avatar3.png';

import tableDataTopCreators from 'variables/nfts/marketplace/tableDataTopCreators';
import HistoryItem from 'components/admin/invertir/HistoryItem';
import TopCreatorTable from 'components/admin/invertir/TableTopCreators';
import NftCard from 'components/card/NftCard';

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          Productos
          </h4>
          <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
          <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Todos
              </a>
            </li>
          <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Staking
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                Inversión
              </a>
            </li>
            </ul>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Método ONE"
            author="Enrico Oddone"
            price="200"
            image={NFtone}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ONE to ONE"
            author="Comunidad"
            price="50"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="GrupONE"
            author="Comunidad"
            price="25"
            image={NFt4}
          />
        </div>

        {/* Recenlty Added setion */}

        {/* Recently Add NFTs */}

      </div>

      {/* right side section */}

    </div>
  );
};

export default Marketplace;
